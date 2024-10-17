import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { Entity } from '@/shared/entities/entity'
import { Optional } from '@/shared/types/optional'

export interface PurchaseOrderItemProps {
    productId: UniqueEntityID
    quantity: number
    unitPrice: number
    subtotal: number
}

export class PurchaseOrderItem extends Entity<PurchaseOrderItemProps> {
    get productId() {
        return this.props.productId
    }

    get quantity() {
        return this.props.quantity
    }

    get unitPrice() {
        return this.props.unitPrice
    }

    get subtotal() {
        return this.props.subtotal
    }

    static create(
        props: Optional<PurchaseOrderItem, 'subtotal'>,
        id?: UniqueEntityID,
    ) {
        const item = new PurchaseOrderItem(
            {
                ...props,
                subtotal: props.quantity * props.unitPrice,
            },
            id,
        )

        return item
    }
}
