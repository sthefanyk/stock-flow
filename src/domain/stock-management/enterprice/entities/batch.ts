import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface BatchProps {
    productId: UniqueEntityID
    expirationDate: Date
    quantity: number
}

export class Batch extends Entity<BatchProps> {}
