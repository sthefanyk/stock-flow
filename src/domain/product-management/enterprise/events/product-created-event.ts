import { DomainEvent } from '@/shared/events/domain-event'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { Product } from '../entities/product'

export class ProductCreatedEvent implements DomainEvent {
    public ocurredAt: Date
    public product: Product

    constructor(product: Product) {
        this.product = product
        this.ocurredAt = new Date()
    }

    getAggregateId(): UniqueEntityID {
        return this.product.id
    }
}
