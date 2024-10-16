import { WatchedList } from '@/shared/entities/watched-list'
import { SaleItem } from './sale-item'

export class SaleItemList extends WatchedList<SaleItem> {
    compareItems(a: SaleItem, b: SaleItem): boolean {
        return a.equals(b)
    }
}
