import { StockLowEvent } from '@/domain/stock-management/enterprise/events/stock-low-event'
import { DomainEvents } from '@/shared/events/domain-events'
import { EventHandler } from '@/shared/events/event-handler'

export class OnStockLow implements EventHandler {
    constructor() {
        this.setupSubscriptions()
    }

    setupSubscriptions(): void {
        DomainEvents.register(
            this.generatePurchaseOrder.bind(this),
            StockLowEvent.name,
        )
    }

    private async generatePurchaseOrder() {}
}
