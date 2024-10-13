import { CategoryProduct } from '@/domain/product-management/enterprise/entities/category-product'
import { CategoryProductDAO } from '../../DAO/category-product-dao'

type DeleteCategoryProductUseCaseInput = {
    code: string
}

type DeleteCategoryProductUseCaseOutput = { categoryProduct: CategoryProduct }

export class DeleteCategoryProductUseCase {
    constructor(private categoryProductRepository: CategoryProductDAO) {}

    async execute({
        code,
    }: DeleteCategoryProductUseCaseInput): Promise<DeleteCategoryProductUseCaseOutput> {
        const categoryProduct =
            await this.categoryProductRepository.findByCode(code)
        if (!categoryProduct) throw new Error('Resource not found.')

        await this.categoryProductRepository.delete(categoryProduct)

        return { categoryProduct }
    }
}
