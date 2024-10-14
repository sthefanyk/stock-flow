import { Product } from '@/domain/product-management/enterprise/entities/product'
import { ProductDAO } from '../../DAO/product-dao'

type SearchProductBySkuUseCaseInput = {
    sku: string
}

type SearchProductBySkuUseCaseOutput = {
    products: Product[]
}

export class SearchProductBySkuUseCase {
    constructor(private productRepository: ProductDAO) {}

    async execute({
        sku,
    }: SearchProductBySkuUseCaseInput): Promise<SearchProductBySkuUseCaseOutput> {
        const products = await this.productRepository.searchBySku(sku)
        return { products }
    }
}
