import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface StockProps {
    productId: UniqueEntityID
    quantityInStock: number
    minimumQuantity: number
}

export class Stock extends Entity<StockProps> {
    get productId() {
        return this.props.productId
    }

    get quantityInStock() {
        return this.props.quantityInStock
    }

    get minimumQuantity() {
        return this.props.minimumQuantity
    }

    static create(props: StockProps, id?: UniqueEntityID) {
        const stock = new Stock(props, id)
        return stock
    }
}
