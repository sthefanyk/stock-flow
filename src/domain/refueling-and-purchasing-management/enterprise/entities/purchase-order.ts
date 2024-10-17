import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { OrderStatus } from '../enum/order-status'
import { Entity } from '@/shared/entities/entity'
import { PurchaseOrderItem } from './purchase-order-item'
import { PurchaseOrderStatusHistory } from './purchase-order-status-history'

export interface PurchaseOrderProps {
    supplierId?: UniqueEntityID
    purchaseOrderItens: PurchaseOrderItem
    status: OrderStatus
    statusHistory: PurchaseOrderStatusHistory
    createdAt: Date
}

export class PurchaseOrder extends Entity<PurchaseOrderProps> {
    get supplierId() {
        return this.props.supplierId
    }

    get purchaseOrderItens() {
        return this.props.purchaseOrderItens
    }

    get status() {
        return this.props.status
    }

    get statusHistory() {
        return this.props.statusHistory
    }

    get createdAt() {
        return this.props.createdAt
    }
}
