import { WatchedList } from '@/shared/entities/watched-list'
import { PurchaseOrderItem } from './purchase-order-item'

export class PurchaseOrderItemList extends WatchedList<PurchaseOrderItem> {
    compareItems(a: PurchaseOrderItem, b: PurchaseOrderItem): boolean {
        return a.equals(b)
    }
}
