import { InMemoryColorProductRepository } from '@/infra/repositories/in-memory/in-memory-color-product-repository'
import { DeleteColorProductUseCase } from './delete-color-product'
import { makeColorProductFactory } from '@/test/factory/product-management/make-color-product'

describe('Delete color', () => {
    it('should be able to delete color', async () => {
        const repository = new InMemoryColorProductRepository()
        const usecase = new DeleteColorProductUseCase(repository)
        const color = makeColorProductFactory({
            code: 'B',
            name: 'Blue',
        })

        repository.create(color)

        await usecase.execute({
            code: 'b',
        })

        expect(repository.colors).length(0)
    })
})
