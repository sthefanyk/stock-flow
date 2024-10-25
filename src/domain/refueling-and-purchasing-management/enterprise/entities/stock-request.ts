import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { PurchaseOrder } from './purchase-order'
import { RequestStatus } from '../enum/request-status'
import { Optional } from '@/shared/types/optional'

export interface StockRequestProps {
    productId: UniqueEntityID
    quantity: number
    requestDate: Date
    requestStatus: RequestStatus
    purchaseOrder?: PurchaseOrder
}

export class StockRequest extends Entity<StockRequestProps> {
    public get productId() {
        return this.props.productId
    }

    public get quantity() {
        return this.props.quantity
    }

    public get requestDate() {
        return this.props.requestDate
    }

    public get requestStatus() {
        return this.props.requestStatus
    }

    public get purchaseOrder() {
        return this.props.purchaseOrder
    }

    static create(
        props: Optional<
            StockRequestProps,
            'requestStatus' | 'requestDate' | 'purchaseOrder'
        >,
        id?: UniqueEntityID,
    ) {
        const stockRequest = new StockRequest(
            {
                ...props,
                requestDate: new Date(),
                requestStatus: RequestStatus.WAITING,
            },
            id,
        )

        return stockRequest
    }
}
