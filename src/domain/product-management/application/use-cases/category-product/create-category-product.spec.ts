import { InMemoryCategoryProductRepository } from '@/infra/repositories/in-memory/in-memory-category-product-repository'
import { CreateCategoryProductUseCase } from './create-category-product'

describe('Create category', () => {
    it('should be able to create category', async () => {
        const repository = new InMemoryCategoryProductRepository()
        const usecase = new CreateCategoryProductUseCase(repository)

        const { categoryProduct } = await usecase.execute({
            code: 'ele',
            name: 'eletrônico',
        })

        expect(repository.categories).length(1)

        expect(categoryProduct.code).toBe('ELE')
        expect(categoryProduct.name).toBe('Eletrônico')
    })
})
