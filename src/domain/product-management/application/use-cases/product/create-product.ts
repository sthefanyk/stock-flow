import { Product } from '@/domain/product-management/enterprise/entities/product'
import { SKU } from '@/domain/product-management/enterprise/value-objects/SKU'
import { CategoryProductDAO } from '../../DAO/category-product-dao'
import { BrandProductDAO } from '../../DAO/brand-product-dao'
import { TypeProductDAO } from '../../DAO/type-product-dao'
import { SizeProductDAO } from '../../DAO/size-product-dao'
import { ColorProductDAO } from '../../DAO/color-product-dao'
import { ProductDAO } from '../../DAO/product-dao'
import { DomainEvents } from '@/shared/events/domain-events'

type CreateProductUseCaseInput = {
    name: string
    description: string
    categoryCode: string
    brandCode: string
    typeCode: string
    sizeCode: string
    colorCode: string
    cost: number
}

type CreateProductUseCaseOutput = { product: Product }

export class CreateProductUseCase {
    constructor(
        private productRepository: ProductDAO,
        private categoryProductRepository: CategoryProductDAO,
        private brandProductRepository: BrandProductDAO,
        private typeProductRepository: TypeProductDAO,
        private sizeProductRepository: SizeProductDAO,
        private colorProductRepository: ColorProductDAO,
    ) {}

    async execute({
        name,
        description,
        categoryCode,
        brandCode,
        typeCode,
        sizeCode,
        colorCode,
        cost,
    }: CreateProductUseCaseInput): Promise<CreateProductUseCaseOutput> {
        const category =
            await this.categoryProductRepository.findByCode(categoryCode)
        if (!category) throw new Error('Category not found.')

        const brand = await this.brandProductRepository.findByCode(brandCode)
        if (!brand) throw new Error('Brand not found.')

        const type = await this.typeProductRepository.findByCode(typeCode)
        if (!type) throw new Error('Type not found.')

        const size = await this.sizeProductRepository.findByTypeCodeAndSizeCode(
            typeCode,
            sizeCode,
        )
        if (!size) throw new Error('Size not found.')

        const color = await this.colorProductRepository.findByCode(colorCode)
        if (!color) throw new Error('Color not found.')

        const product = Product.create({
            SKU: new SKU(category, brand, type, size, color),
            name,
            description,
            cost,
        })

        await this.productRepository.create(product)

        DomainEvents.dispatchEventsForAggregate(product.id)

        return { product }
    }
}
