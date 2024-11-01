import { InMemoryProductRepository } from '@/infra/repositories/in-memory/in-memory-product-repository'
import { CreateProductUseCase } from './create-product'
import { TestContext, MockInstance } from 'vitest'
import { CategoryProductDAO } from '../../DAO/category-product-dao'
import { BrandProductDAO } from '../../DAO/brand-product-dao'
import { TypeProductDAO } from '../../DAO/type-product-dao'
import { SizeProductDAO } from '../../DAO/size-product-dao'
import { ColorProductDAO } from '../../DAO/color-product-dao'
import { InMemoryCategoryProductRepository } from '@/infra/repositories/in-memory/in-memory-category-product-repository'
import { InMemoryBrandProductRepository } from '@/infra/repositories/in-memory/in-memory-brand-product-repository'
import { InMemoryTypeProductRepository } from '@/infra/repositories/in-memory/in-memory-type-product-repository'
import { InMemorySizeProductRepository } from '@/infra/repositories/in-memory/in-memory-size-product-repository'
import { InMemoryColorProductRepository } from '@/infra/repositories/in-memory/in-memory-color-product-repository'
import { makeCategoryProductFactory } from '@/test/factory/product-management/make-category-product'
import { makeBrandProductFactory } from '@/test/factory/product-management/make-brand-product'
import { makeTypeProductFactory } from '@/test/factory/product-management/make-type-product'
import { makeColorProductFactory } from '@/test/factory/product-management/make-color-product'
import { makeSizeProductFactory } from '@/test/factory/product-management/make-size-product'
import { waitFor } from '@/test/utils/wait-for'

interface TestContextWithSut extends TestContext {
    productsRepository: InMemoryProductRepository
    categoryProductRepository: CategoryProductDAO
    brandProductRepository: BrandProductDAO
    typeProductRepository: TypeProductDAO
    sizeProductRepository: SizeProductDAO
    colorProductRepository: ColorProductDAO
    sut: CreateProductUseCase
    productCreatedSpy: MockInstance
}

describe('Create product', () => {
    beforeEach((context: TestContextWithSut) => {
        context.productsRepository = new InMemoryProductRepository()
        context.categoryProductRepository =
            new InMemoryCategoryProductRepository()
        context.brandProductRepository = new InMemoryBrandProductRepository()
        context.typeProductRepository = new InMemoryTypeProductRepository()
        context.sizeProductRepository = new InMemorySizeProductRepository()
        context.colorProductRepository = new InMemoryColorProductRepository()

        context.sut = new CreateProductUseCase(
            context.productsRepository,
            context.categoryProductRepository,
            context.brandProductRepository,
            context.typeProductRepository,
            context.sizeProductRepository,
            context.colorProductRepository,
        )

        context.productCreatedSpy = vi.spyOn(context.sut, 'execute')
    })

    it('should be able to create product', async ({
        sut,
        productsRepository,
        categoryProductRepository,
        brandProductRepository,
        typeProductRepository,
        colorProductRepository,
        sizeProductRepository,
        productCreatedSpy,
    }: TestContextWithSut) => {
        const category = makeCategoryProductFactory()
        const brand = makeBrandProductFactory()
        const type = makeTypeProductFactory()
        const size = makeSizeProductFactory({ typeCode: type.code })
        type.addSize(size)
        type.addSize(makeSizeProductFactory({ typeCode: type.code }))
        const color = makeColorProductFactory()

        categoryProductRepository.create(category)
        brandProductRepository.create(brand)
        typeProductRepository.create(type)
        sizeProductRepository.saveAll(type.sizes.currentItems)
        colorProductRepository.create(color)

        await sut.execute({
            name: 'computer',
            description: '',
            categoryCode: category.code,
            brandCode: brand.code,
            typeCode: type.code,
            sizeCode: size.code,
            colorCode: color.code,
            cost: 5000,
        })

        expect(productsRepository.products).length(1)
        expect(productsRepository.products[0].name).toBe('Computer')
        expect(productsRepository.products[0].description).toBe('')
        expect(productsRepository.products[0].cost).toBe(5000)
        expect(productsRepository.products[0].SKU.getSKU()).toBe(
            `${category.code}-${brand.code}-${type.code}-${size.code}-${color.code}`,
        )

        await waitFor(() => {
            expect(productCreatedSpy).toHaveBeenCalled()
        })
    })
})
