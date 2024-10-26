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

    isValidSizeForType(size: SizeProduct): boolean {
        return this.props.sizes.exists(size)
    }

    addSize(size: SizeProduct): void {
        this.props.sizes.add(size)
        // if (this.isValidSizeForType(size)) {
        // }
    }

    removeSize(size: SizeProduct): void {
        this.props.sizes.remove(size)
    }

    static create(props: Optional<TypeProductProps, 'sizes'>) {
        const typeProduct = new TypeProduct({
            ...this.validate(props),
            sizes: props.sizes ?? new SizeList(),
        })
        return typeProduct
    }

    static validate(props: Optional<TypeProductProps, 'sizes'>) {
        // Validation for the name (should not be empty)
        if (!props.name || props.name.trim() === '') {
            throw new Error('The name cannot be empty.')
        }
        props.name = props.name
            .split(' ')
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
            )
            .join(' ')

        // Validation for the code (exactly 2 letters) and convert to uppercase
        if (!/^[a-zA-Z]{2}$/.test(props.code)) {
            throw new Error('The code must contain exactly 2 letters.')
        }
        props.code = props.code.toUpperCase()

        return props
    }
}
