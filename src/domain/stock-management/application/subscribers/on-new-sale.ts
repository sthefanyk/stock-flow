import { NewSaleEvent } from '@/domain/sale-management/enterprise/events/new-sale-event'
import { DomainEvents } from '@/shared/events/domain-events'
import { EventHandler } from '@/shared/events/event-handler'
import { StockDAO } from '../DAO/stock-dao'

export class OnNewSale implements EventHandler {
    constructor(private stockRepository: StockDAO) {
        this.setupSubscriptions()
    }

    setupSubscriptions(): void {
        DomainEvents.register(
            this.decreasesStockOfProductSold.bind(this),
            NewSaleEvent.name,
        )
    }

    private async decreasesStockOfProductSold({ sale }: NewSaleEvent) {
        if (sale) {
            for (const saleItem of sale.saleItens.currentItems) {
                const productStock = await this.stockRepository.findByProductId(
                    saleItem.productId.toString(),
                )

                if (productStock) {
                    productStock.reduceQuantityInStock(
                        saleItem.quantityOfProducts,
                    )

                    await this.stockRepository.save(productStock)
                }
            }
        }
    }
}
