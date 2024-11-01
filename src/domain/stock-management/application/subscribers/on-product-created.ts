import { ProductCreatedEvent } from '@/domain/product-management/enterprise/events/product-created-event'
import { DomainEvents } from '@/shared/events/domain-events'
import { EventHandler } from '@/shared/events/event-handler'
import { StockDAO } from '../DAO/stock-dao'
import { InitializesStockForTheNewProductUseCase } from '../use-cases/InitializesStockForTheNewProduct'

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
        const usecase = new InitializesStockForTheNewProductUseCase(
            this.stockRepository,
        )

        if (product) {
            await usecase.execute({
                product,
            })
        }
    }
}
