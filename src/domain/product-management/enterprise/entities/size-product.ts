import { Entity } from '@/shared/entities/entity'

export interface SizeProductProps {
    code: string
    description: string
}

export class SizeProduct extends Entity<SizeProductProps> {
    get code(): string {
        return this.props.code
    }

    get description(): string {
        return this.props.description
    }
}
