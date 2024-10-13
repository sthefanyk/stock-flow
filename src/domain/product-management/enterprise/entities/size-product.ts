import { Entity } from '@/shared/entities/entity'

export interface SizeProductProps {
    typeCode: string
    code: string
    description: string
    unitOfMeasure: string
}

export class SizeProduct extends Entity<SizeProductProps> {
    get typeCode(): string {
        return this.props.typeCode
    }

    get code(): string {
        return this.props.code
    }

    get description(): string {
        return this.props.description
    }

    get unitOfMeasure(): string {
        return this.props.unitOfMeasure
    }

    static create(props: SizeProductProps) {
        const sizeProduct = new SizeProduct(props)
        return sizeProduct
    }
}
