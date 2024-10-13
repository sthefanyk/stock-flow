import { WatchedList } from '@/shared/entities/watched-list'
import { SizeProduct } from './size-product'

export class SizeList extends WatchedList<SizeProduct> {
    compareItems(a: SizeProduct, b: SizeProduct): boolean {
        return a.code === b.code && a.typeCode === b.typeCode
    }
}
