import { Entity } from '@/shared/entities/entity'
import { SKU } from '../value-objects/SKU'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface ProductProps {
    id: UniqueEntityID
    SKU: SKU
    name: string
    description: string
    price: number
    cost: number
    quantityInStock: number
    minimumQuantity: number
}

export class Product extends Entity<ProductProps> {
    get id() {
        return this.props.id
    }

    get SKU() {
        return this.props.SKU
    }

    get name() {
        return this.props.name
    }

    get description() {
        return this.props.description
    }

    get price() {
        return this.props.price
    }

    get cost() {
        return this.props.cost
    }

    get quantityInStock() {
        return this.props.quantityInStock
    }

    get minimumQuantity() {
        return this.props.minimumQuantity
    }
}
