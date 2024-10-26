import { Entity } from '@/shared/entities/entity'

export interface SizeProductProps {
    typeCode: string
    code: string
    description?: string
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
        return this.props.description!
    }

    get unitOfMeasure(): string {
        return this.props.unitOfMeasure
    }

    static create(props: SizeProductProps) {
        const sizeProduct = new SizeProduct(this.validate(props))
        return sizeProduct
    }

    static validate(props: SizeProductProps) {
        // Validation for the type code (exactly 3 letters) and convert to uppercase
        if (!/^[a-zA-Z]{2}$/.test(props.typeCode)) {
            throw new Error('The type code must contain exactly 2 letters.')
        }
        props.typeCode = props.typeCode.toUpperCase()

        // Validation for the code (1 or 2 alphanumeric characters) and convert to uppercase
        if (!/^[a-zA-Z0-9]{1,2}$/.test(props.code)) {
            throw new Error(
                'The code must contain 1 or 2 alphanumeric characters.',
            )
        }
        props.code = props.code.toUpperCase()

        // Set description to an empty string if it is not provided
        props.description = props.description ?? ''

        // Validation for the unit of measure (should not be empty)
        if (!props.unitOfMeasure || props.unitOfMeasure.trim() === '') {
            throw new Error('The unit of measure cannot be empty.')
        }
        props.unitOfMeasure = props.unitOfMeasure
            .split(' ')
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
            )
            .join(' ')

        return props
    }
}
