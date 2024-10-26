import { InMemoryBrandProductRepository } from '@/infra/repositories/in-memory/in-memory-brand-product-repository'
import { makeBrandProductFactory } from '@/test/factory/product-management/make-brand-product'
import { ListAllBrandProductUseCase } from './list-all-brand-product'

describe('List all categories', () => {
    it('should be able to find brand by code', async () => {
        const repository = new InMemoryBrandProductRepository()
        const usecase = new ListAllBrandProductUseCase(repository)
        const brand = makeBrandProductFactory({
            code: 'BRA',
            name: 'Brand',
        })

        repository.create(brand)
        repository.create(makeBrandProductFactory())

        const { brands } = await usecase.execute()

        expect(brands).toHaveLength(2)
        expect(brands[0]!.code).toBe('BRA')
    })
})
