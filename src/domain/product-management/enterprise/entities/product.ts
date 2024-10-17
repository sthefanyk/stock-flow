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
        const product = new Product(props, id)

        const isNewProduct = !id

        if (isNewProduct) {
            product.addDomainEvent(new ProductCreatedEvent(product))
        }

        return product
    }
}
