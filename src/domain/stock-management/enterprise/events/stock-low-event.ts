import { DomainEvent } from '@/shared/events/domain-event'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { Stock } from '../entities/stock'

export class StockLowEvent implements DomainEvent {
    public ocurredAt: Date
    public stock: Stock

    constructor(stock: Stock) {
        this.stock = stock
        this.ocurredAt = new Date()
    }

    getAggregateId(): UniqueEntityID {
        return this.stock.id
    }
}
