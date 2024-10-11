import { Entity } from '@/shared/entities/entity'

export interface BrandProductProps {
    code: string
    name: string
    description: string
}

export class BrandProduct extends Entity<BrandProductProps> {
    get code(): string {
        return this.props.code
    }

    get name(): string {
        return this.props.name
    }

    get description(): string {
        return this.props.description
    }
}
