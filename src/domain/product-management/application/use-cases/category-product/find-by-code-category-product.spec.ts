import { InMemoryCategoryProductRepository } from '@/infra/repositories/in-memory/in-memory-category-product-repository'
import { FindByCodeCategoryProductUseCase } from './find-by-code-category-product'
import { makeCategoryProductFactory } from '@/test/factory/product-management/make-category-product'
import { CategoryProduct } from '@/domain/product-management/enterprise/entities/category-product'

describe('Find by code category', () => {
    it('should be able to find category by code', async () => {
        const repository = new InMemoryCategoryProductRepository()
        const usecase = new FindByCodeCategoryProductUseCase(repository)
        const category = makeCategoryProductFactory({
            code: 'ELE',
            name: 'Eletronico',
        })

        repository.create(category)

        const { categoryProduct } = await usecase.execute({
            code: 'ELe',
        })

        expect(categoryProduct).toBeInstanceOf(CategoryProduct)
        expect(categoryProduct!.code).toBe('ELE')
    })
})
