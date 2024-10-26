import { InMemoryCategoryProductRepository } from '@/infra/repositories/in-memory/in-memory-category-product-repository'
import { makeCategoryProductFactory } from '@/test/factory/product-management/make-category-product'
import { ListAllCategoryProductUseCase } from './list-all-category-product'

describe('List all categories', () => {
    it('should be able to find category by code', async () => {
        const repository = new InMemoryCategoryProductRepository()
        const usecase = new ListAllCategoryProductUseCase(repository)
        const category = makeCategoryProductFactory({
            code: 'ELE',
            name: 'Eletronico',
        })

        repository.create(category)
        repository.create(makeCategoryProductFactory())

        const { categories } = await usecase.execute()

        expect(categories).toHaveLength(2)
        expect(categories[0]!.code).toBe('ELE')
    })
})
