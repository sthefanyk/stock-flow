import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface StockRequestProps {
    productId: UniqueEntityID
    quantity: number
    requestDate: Date
}

export class StockRequest extends Entity<StockRequestProps> {}
