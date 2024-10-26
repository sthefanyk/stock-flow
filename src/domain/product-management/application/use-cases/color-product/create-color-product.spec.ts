import { InMemoryColorProductRepository } from '@/infra/repositories/in-memory/in-memory-color-product-repository'
import { CreateColorProductUseCase } from './create-color-product'

describe('Create color', () => {
    it('should be able to create color', async () => {
        const repository = new InMemoryColorProductRepository()
        const usecase = new CreateColorProductUseCase(repository)

        const { colorProduct } = await usecase.execute({
            code: 'b',
            name: 'blue',
        })

        expect(repository.colors).length(1)

        expect(colorProduct.code).toBe('B')
        expect(colorProduct.name).toBe('Blue')
    })
})
