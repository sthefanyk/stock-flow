import { Entity } from '@/shared/entities/entity'

export interface CategoryProductProps {
    code: string
    name: string
    description?: string
}

export class CategoryProduct extends Entity<CategoryProductProps> {
    get code(): string {
        return this.props.code
    }

    get name(): string {
        return this.props.name
    }

    get description(): string {
        return this.props.description!
    }

    static create(props: CategoryProductProps) {
        const category = new CategoryProduct(this.validate(props))
        return category
    }

    static validate(props: CategoryProductProps) {
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
