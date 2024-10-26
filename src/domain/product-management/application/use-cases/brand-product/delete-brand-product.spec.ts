import { InMemoryBrandProductRepository } from '@/infra/repositories/in-memory/in-memory-brand-product-repository'
import { DeleteBrandProductUseCase } from './delete-brand-product'
import { makeBrandProductFactory } from '@/test/factory/product-management/make-brand-product'

describe('Delete brand', () => {
    it('should be able to delete brand', async () => {
        const repository = new InMemoryBrandProductRepository()
        const usecase = new DeleteBrandProductUseCase(repository)
        const brand = makeBrandProductFactory({
            code: 'BRA',
            name: 'Brand',
        })

        repository.create(brand)

        await usecase.execute({
            code: 'bra',
        })

        expect(repository.brands).length(0)
    })
})
