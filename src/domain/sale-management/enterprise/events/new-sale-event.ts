import { DomainEvent } from '@/shared/events/domain-event'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { Sale } from '../entities/sale'

export class NewSaleEvent implements DomainEvent {
    public ocurredAt: Date
    public sale: Sale

    constructor(sale: Sale) {
        this.sale = sale
        this.ocurredAt = new Date()
    }

    getAggregateId(): UniqueEntityID {
        return this.sale.id
    }
}
