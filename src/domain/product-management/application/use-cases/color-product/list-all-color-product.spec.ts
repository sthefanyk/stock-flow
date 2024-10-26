import { InMemoryColorProductRepository } from '@/infra/repositories/in-memory/in-memory-color-product-repository'
import { makeColorProductFactory } from '@/test/factory/product-management/make-color-product'
import { ListAllColorProductUseCase } from './list-all-color-product'

describe('List all colors', () => {
    it('should be able to find color by code', async () => {
        const repository = new InMemoryColorProductRepository()
        const usecase = new ListAllColorProductUseCase(repository)
        const color = makeColorProductFactory({
            code: 'B',
            name: 'Blue',
        })

        repository.create(color)
        repository.create(makeColorProductFactory())

        const { colors } = await usecase.execute()

        expect(colors).toHaveLength(2)
        expect(colors[0]!.code).toBe('B')
    })
})
