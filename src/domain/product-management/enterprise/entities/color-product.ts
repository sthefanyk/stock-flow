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
        const color = new ColorProduct(props)
        return color
    }
}
