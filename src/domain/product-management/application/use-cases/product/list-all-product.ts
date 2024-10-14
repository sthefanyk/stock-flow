import { Product } from '@/domain/product-management/enterprise/entities/product'
import { ProductDAO } from '../../DAO/product-dao'

// type ListAllProductUseCaseInput = void

type ListAllProductUseCaseOutput = { products: Product[] }

export class ListAllProductUseCase {
    constructor(private productRepository: ProductDAO) {}

    async execute(): Promise<ListAllProductUseCaseOutput> {
        const products = await this.productRepository.listAll()

        return { products }
    }
}
