import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { PurchaseOrder } from './purchase-order'
import { RequestStatus } from '../enum/request-status'

export interface StockRequestProps {
    productId: UniqueEntityID
    quantity: number
    requestDate: Date
    requestStatus: RequestStatus
    purchaseOrder?: PurchaseOrder
}

export class StockRequest extends Entity<StockRequestProps> {}
