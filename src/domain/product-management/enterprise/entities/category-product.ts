import { Entity } from '@/shared/entities/entity'

export interface CategoryProductProps {
    code: string
    name: string
    description: string
}

export class CategoryProduct extends Entity<CategoryProductProps> {
    get code(): string {
        return this.props.code
    }

    get name(): string {
        return this.props.name
    }

    get description(): string {
        return this.props.description
    }

    static create(props: CategoryProductProps) {
        const category = new CategoryProduct(props)
        return category
    }
}
