import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { OrderStatus } from '../enum/order-status'
import { Entity } from '@/shared/entities/entity'

export interface PurchaseOrderProps {
    supplierId: UniqueEntityID
    productId: UniqueEntityID
    status: OrderStatus
    created_at: Date
}

export class PurchaseOrder extends Entity<PurchaseOrderProps> {}
