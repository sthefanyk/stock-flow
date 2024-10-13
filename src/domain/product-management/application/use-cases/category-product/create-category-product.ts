import { CategoryProduct } from '@/domain/product-management/enterprise/entities/category-product'
import { CategoryProductDAO } from '../../DAO/category-product-dao'

type CreateCategoryProductUseCaseInput = {
    code: string
    name: string
    description: string
}

type CreateCategoryProductUseCaseOutput = { categoryProduct: CategoryProduct }

export class CreateCategoryProductUseCase {
    constructor(private categoryProductRepository: CategoryProductDAO) {}

    async execute({
        code,
        name,
        description,
    }: CreateCategoryProductUseCaseInput): Promise<CreateCategoryProductUseCaseOutput> {
        const category = await this.categoryProductRepository.findByCode(code)
        if (!category) throw new Error('Resources already exist.')

        const categoryProduct = CategoryProduct.create({
            code,
            name,
            description,
        })

        await this.categoryProductRepository.create(categoryProduct)

        return { categoryProduct }
    }
}
