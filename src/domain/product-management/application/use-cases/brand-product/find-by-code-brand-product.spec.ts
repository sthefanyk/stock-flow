import { InMemoryBrandProductRepository } from '@/infra/repositories/in-memory/in-memory-brand-product-repository'
import { FindByCodeBrandProductUseCase } from './find-by-code-brand-product'
import { makeBrandProductFactory } from '@/test/factory/product-management/make-brand-product'
import { BrandProduct } from '@/domain/product-management/enterprise/entities/brand-product'

describe('Find by code brand', () => {
    it('should be able to find brand by code', async () => {
        const repository = new InMemoryBrandProductRepository()
        const usecase = new FindByCodeBrandProductUseCase(repository)
        const brand = makeBrandProductFactory({
            code: 'BRA',
            name: 'Brand',
        })

        repository.create(brand)

        const { brandProduct } = await usecase.execute({
            code: 'Bra',
        })

        expect(brandProduct).toBeInstanceOf(BrandProduct)
        expect(brandProduct!.code).toBe('BRA')
    })
})
