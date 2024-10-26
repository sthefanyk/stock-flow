import { Entity } from '@/shared/entities/entity'

export interface BrandProductProps {
    code: string
    name: string
    description?: string
}

export class BrandProduct extends Entity<BrandProductProps> {
    get code(): string {
        return this.props.code
    }

    get name(): string {
        return this.props.name
    }

    get description(): string {
        return this.props.description!
    }

    static create(props: BrandProductProps) {
        const brand = new BrandProduct(this.validate(props))
        return brand
    }

    static validate(props: BrandProductProps) {
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

        // Validation for the code (exactly 3 letters) and convert to uppercase
        if (!/^[a-zA-Z]{3}$/.test(props.code)) {
            throw new Error('The code must contain exactly 3 letters.')
        }
        props.code = props.code.toUpperCase()

        // Set description to an empty string if it is not provided
        props.description = props.description ?? ''

        return props
    }
}
