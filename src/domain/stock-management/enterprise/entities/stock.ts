import { AggregateRoot } from '@/shared/entities/aggregate-root'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface StockProps {
    productId: UniqueEntityID
    quantityInStock: number
    minimumQuantity: number
}

export class Stock extends AggregateRoot<StockProps> {
    get productId() {
        return this.props.productId
    }

    get quantityInStock() {
        return this.props.quantityInStock
    }

    get minimumQuantity() {
        return this.props.minimumQuantity
    }

    reduceQuantityInStock(quantity: number): void {
        const newQuantityInStock = this.quantityInStock - quantity

        if (newQuantityInStock >= 0) {
            this.props.quantityInStock = newQuantityInStock
        }
    }

    static create(props: StockProps, id?: UniqueEntityID) {
        const stock = new Stock(props, id)
        return stock
    }
}
