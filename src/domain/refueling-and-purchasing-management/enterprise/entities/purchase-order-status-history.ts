import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { OrderStatus } from '../enum/order-status'
import { Optional } from '@/shared/types/optional'

export interface PurchaseOrderStatusHistoryProps {
    purchaseOrder: UniqueEntityID
    previousStatus: OrderStatus
    newStatus: OrderStatus
    dateOfChange: Date
    chandedBy: string
}

export class PurchaseOrderStatusHistory extends Entity<PurchaseOrderStatusHistoryProps> {
    static create(
        props: Optional<PurchaseOrderStatusHistoryProps, 'dateOfChange'>,
        id?: UniqueEntityID,
    ) {
        const statusHistory = new PurchaseOrderStatusHistory(
            {
                ...props,
                dateOfChange: new Date(),
            },
            id,
        )
        return statusHistory
    }
}
