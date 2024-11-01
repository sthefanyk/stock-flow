import { Product } from '@/domain/product-management/enterprise/entities/product'
import { StockDAO } from '../DAO/stock-dao'
import { Stock } from '../../enterprise/entities/stock'

type InitializesStockForTheNewProductUseCaseInput = {
    product: Product
}

type InitializesStockForTheNewProductUseCaseOutput = null

export class InitializesStockForTheNewProductUseCase {
    constructor(private stockRepository: StockDAO) {}
    async execute({
        product,
    }: InitializesStockForTheNewProductUseCaseInput): Promise<InitializesStockForTheNewProductUseCaseOutput> {
        const stock = Stock.create({
            productId: product.id,
            minimumQuantity: 0,
            quantityInStock: 0,
        })

        this.stockRepository.create(stock)

        return null
    }
}
