import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface SaleItemProps {
    productId: UniqueEntityID
    quantity: number
    appliedPrice: number
}

export class SaleItem extends Entity<SaleItemProps> {}
