import { InMemoryCategoryProductRepository } from '@/infra/repositories/in-memory/in-memory-category-product-repository'
import { DeleteCategoryProductUseCase } from './delete-category-product'
import { makeCategoryProductFactory } from '@/test/factory/product-management/make-category-product'

describe('Delete category', () => {
    it('should be able to delete category', async () => {
        const repository = new InMemoryCategoryProductRepository()
        const usecase = new DeleteCategoryProductUseCase(repository)
        const category = makeCategoryProductFactory({
            code: 'ELE',
            name: 'Eletronico',
        })

        repository.create(category)

        await usecase.execute({
            code: 'ele',
        })

        expect(repository.categories).length(0)
    })
})
