import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { TypeMovement } from '../enum/type-movement'

interface StockMovementProps {
    productId: UniqueEntityID
    quantity: number
    type: TypeMovement
    date: Date
}

export class StockMovement extends Entity<StockMovementProps> {}
