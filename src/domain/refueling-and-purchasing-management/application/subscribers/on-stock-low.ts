import { StockLowEvent } from '@/domain/stock-management/enterprise/events/stock-low-event'
import { DomainEvents } from '@/shared/events/domain-events'
import { EventHandler } from '@/shared/events/event-handler'
import { GenerateStockRequestUseCase } from '../use-cases/stock-request/generate-stock-request'
import { StockRequestDAO } from '../DAO/stock-request-dao'

export class OnStockLow implements EventHandler {
    constructor(private stockRequestRepository: StockRequestDAO) {
        this.setupSubscriptions()
    }

    setupSubscriptions(): void {
        DomainEvents.register(
            this.generatePurchaseOrder.bind(this),
            StockLowEvent.name,
        )
    }

    private async generatePurchaseOrder({ stock }: StockLowEvent) {
        const usecase = new GenerateStockRequestUseCase(
            this.stockRequestRepository,
        )

        const numberOfProductsRequestedForPurchase =
            stock.minimumQuantity * 2 - stock.quantityInStock

        usecase.execute({
            productId: stock.productId.toString(),
            quantity: numberOfProductsRequestedForPurchase,
        })
    }
}
