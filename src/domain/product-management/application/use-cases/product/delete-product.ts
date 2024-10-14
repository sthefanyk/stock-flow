import { Product } from '@/domain/product-management/enterprise/entities/product'
import { ProductDAO } from '../../DAO/product-dao'

type DeleteProductUseCaseInput = {
    id: string
}

type DeleteProductUseCaseOutput = { product: Product }

export class DeleteProductUseCase {
    constructor(private productRepository: ProductDAO) {}

    async execute({
        id,
    }: DeleteProductUseCaseInput): Promise<DeleteProductUseCaseOutput> {
        const product = await this.productRepository.findById(id)
        if (!product) throw new Error('Resource not found.')

        await this.productRepository.delete(product)

        return { product }
    }
}
