import { SizeList } from './size-list'
import { SizeProduct } from './size-product'
import { Optional } from '@/shared/types/optional'
import { AggregateRoot } from '@/shared/entities/aggregate-root'

export interface TypeProductProps {
    code: string
    name: string
    sizes: SizeList
}

export class TypeProduct extends AggregateRoot<TypeProductProps> {
    get code(): string {
        return this.props.code
    }

    get name(): string {
        return this.props.name
    }

    get sizes(): SizeList {
        return this.props.sizes
    }

    public set name(name: string) {
        this.props.name = name
    }

    public set sizes(sizeList: SizeList) {
        this.props.sizes = sizeList
    }

    private isValidSizeForType(size: SizeProduct): boolean {
        return this.props.sizes.exists(size)
    }

    addSize(size: SizeProduct): void {
        if (this.isValidSizeForType(size)) {
            this.props.sizes.add(size)
        }
    }

    removeSize(size: SizeProduct): void {
        this.props.sizes.remove(size)
    }

    static create(props: Optional<TypeProductProps, 'sizes'>) {
        const typeProduct = new TypeProduct({
            ...props,
            sizes: props.sizes ?? new SizeList(),
        })
        return typeProduct
    }
}
