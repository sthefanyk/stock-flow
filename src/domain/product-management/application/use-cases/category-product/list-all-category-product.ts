import { CategoryProduct } from '@/domain/product-management/enterprise/entities/category-product'
import { CategoryProductDAO } from '../../DAO/category-product-dao'

// type ListAllCategoryProductUseCaseInput = void

type ListAllCategoryProductUseCaseOutput = { categories: CategoryProduct[] }

export class ListAllCategoryProductUseCase {
    constructor(private categoryProductRepository: CategoryProductDAO) {}

    async execute(): Promise<ListAllCategoryProductUseCaseOutput> {
        const categories = await this.categoryProductRepository.listAll()

        return { categories }
    }
}
