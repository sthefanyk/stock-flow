import { Entity } from '@/shared/entities/entity'

export interface ColorProductProps {
    code: string
    name: string
}

export class ColorProduct extends Entity<ColorProductProps> {
    get code(): string {
        return this.props.code
    }

    get name(): string {
        return this.props.name
    }

    static create(props: ColorProductProps) {
        const color = new ColorProduct(this.validate(props))
        return color
    }

    static validate(props: ColorProductProps) {
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

        // Validation for the code (exactly 1 letters) and convert to uppercase
        if (!/^[a-zA-Z]{1}$/.test(props.code)) {
            throw new Error('The code must contain exactly 1 letters.')
        }
        props.code = props.code.toUpperCase()

        return props
    }
}
