import { InMemoryColorProductRepository } from '@/infra/repositories/in-memory/in-memory-color-product-repository'
import { FindByCodeColorProductUseCase } from './find-by-code-color-product'
import { makeColorProductFactory } from '@/test/factory/product-management/make-color-product'
import { ColorProduct } from '@/domain/product-management/enterprise/entities/color-product'

describe('Find by code color', () => {
    it('should be able to find color by code', async () => {
        const repository = new InMemoryColorProductRepository()
        const usecase = new FindByCodeColorProductUseCase(repository)
        const color = makeColorProductFactory({
            code: 'B',
            name: 'Blue',
        })

        repository.create(color)

        const { colorProduct } = await usecase.execute({
            code: 'b',
        })

        expect(colorProduct).toBeInstanceOf(ColorProduct)
        expect(colorProduct!.code).toBe('B')
    })
})
