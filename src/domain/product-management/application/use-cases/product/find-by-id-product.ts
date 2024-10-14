import { Product } from '@/domain/product-management/enterprise/entities/product'
import { ProductDAO } from '../../DAO/product-dao'

type FindByIdProductUseCaseInput = {
    id: string
}

type FindByIdProductUseCaseOutput = {
    product: Product | null
}

export class FindByIdProductUseCase {
    constructor(private productRepository: ProductDAO) {}

    async execute({
        id,
    }: FindByIdProductUseCaseInput): Promise<FindByIdProductUseCaseOutput> {
        const product = await this.productRepository.findById(id)
        return { product }
    }
}
