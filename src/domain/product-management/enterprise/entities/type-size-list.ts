import { WatchedList } from '@/shared/entities/watched-list'
import { TypeSize } from './type-size'

export class TypeSizeList extends WatchedList<TypeSize> {
    compareItems(a: TypeSize, b: TypeSize): boolean {
        return a.codeType === b.codeType
    }
}
