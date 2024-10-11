import { Entity } from '@/shared/entities/entity'
import { TypeSizeList } from './type-size-list'
import { SizeProduct } from './size-product'
import { TypeSize } from './type-size'

export interface TypeProductProps {
    code: string
    name: string
    typeSizes: TypeSizeList
}

export class TypeProduct extends Entity<TypeProductProps> {
    get code(): string {
        return this.props.code
    }

    get name(): string {
        return this.props.name
    }

    get typeSizes(): TypeSizeList {
        return this.props.typeSizes
    }

    isValidSizeForType(size: SizeProduct): boolean {
        return this.typeSizes.exists(
            new TypeSize({
                codeSize: size.code,
                codeType: this.code,
            }),
        )
    }
}
