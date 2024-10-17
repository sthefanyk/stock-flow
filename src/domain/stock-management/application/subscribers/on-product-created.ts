import { ProductCreatedEvent } from '@/domain/product-management/enterprise/events/product-created-event'
import { DomainEvents } from '@/shared/events/domain-events'
import { EventHandler } from '@/shared/events/event-handler'
import { StockDAO } from '../DAO/stock-dao'
import { Stock } from '../../enterprise/entities/stock'

export class OnProductCreated implements EventHandler {
    constructor(private stockRepository: StockDAO) {
        this.setupSubscriptions()
    }

    setupSubscriptions(): void {
        DomainEvents.register(
            this.initializesStockForTheNewProduct.bind(this),
            ProductCreatedEvent.name,
        )
    }

    private async initializesStockForTheNewProduct({
        product,
    }: ProductCreatedEvent) {
        if (product) {
            const stock = Stock.create({
                productId: product.id,
                minimumQuantity: 0,
                quantityInStock: 0,
            })

            this.stockRepository.create(stock)
        }
    }
}
