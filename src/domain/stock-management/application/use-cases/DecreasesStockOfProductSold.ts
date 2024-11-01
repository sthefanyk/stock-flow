import { StockDAO } from '../DAO/stock-dao'
import { Sale } from '@/domain/sale-management/enterprise/entities/sale'

type DecreasesStockOfProductSoldUseCaseInput = {
    sale: Sale
}

type DecreasesStockOfProductSoldUseCaseOutput = null

export class DecreasesStockOfProductSoldUseCase {
    constructor(private stockRepository: StockDAO) {}
    async execute({
        sale,
    }: DecreasesStockOfProductSoldUseCaseInput): Promise<DecreasesStockOfProductSoldUseCaseOutput> {
        for (const saleItem of sale.saleItens.currentItems) {
            const productStock = await this.stockRepository.findByProductId(
                saleItem.productId.toString(),
            )

            if (productStock) {
                productStock.reduceQuantityInStock(saleItem.quantityOfProducts)

                await this.stockRepository.save(productStock)
            }
        }

        return null
    }
}
