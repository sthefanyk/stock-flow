import { CategoryProduct } from '@/domain/product-management/enterprise/entities/category-product'
import { CategoryProductDAO } from '../../DAO/category-product-dao'

type FindByCodeCategoryProductUseCaseInput = {
    code: string
}

type FindByCodeCategoryProductUseCaseOutput = {
    categoryProduct: CategoryProduct | null
}

export class FindByCodeCategoryProductUseCase {
    constructor(private categoryProductRepository: CategoryProductDAO) {}

    async execute({
        code,
    }: FindByCodeCategoryProductUseCaseInput): Promise<FindByCodeCategoryProductUseCaseOutput> {
        const categoryProduct = await this.categoryProductRepository.findByCode(
            code.toUpperCase(),
        )
        return { categoryProduct }
    }
}
