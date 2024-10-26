import { InMemoryBrandProductRepository } from '@/infra/repositories/in-memory/in-memory-brand-product-repository'
import { CreateBrandProductUseCase } from './create-brand-product'

describe('Create brand', () => {
    it('should be able to create brand', async () => {
        const repository = new InMemoryBrandProductRepository()
        const usecase = new CreateBrandProductUseCase(repository)

        const { brandProduct } = await usecase.execute({
            code: 'bra',
            name: 'brand',
        })

        expect(repository.brands).length(1)

        expect(brandProduct.code).toBe('BRA')
        expect(brandProduct.name).toBe('Brand')
    })
})
