import { SKU } from '../value-objects/SKU'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { AggregateRoot } from '@/shared/entities/aggregate-root'
import { ProductCreatedEvent } from '../events/product-created-event'

export interface ProductProps {
    SKU: SKU
    name: string
    description: string
    cost: number
}

export class Product extends AggregateRoot<ProductProps> {
    get SKU() {
        return this.props.SKU
    }

    get name() {
        return this.props.name
    }

    get description() {
        return this.props.description
    }

    get cost() {
        return this.props.cost
    }

    static update(props: ProductProps, id?: UniqueEntityID) {
        const product = new Product(props, id)
        return product
    }

    static create(props: ProductProps, id?: UniqueEntityID) {
        const product = new Product(this.validate(props), id)

        const isNewProduct = !id

        if (isNewProduct) {
            product.addDomainEvent(new ProductCreatedEvent(product))
        }

        return product
    }

    static validate(props: ProductProps) {
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

        // Validation for the cost (should not be less than or equal to zero)
        if (props.cost <= 0) {
            throw new Error('The cost cannot be less than or equal to zero.')
        }
        return props
    }
}
