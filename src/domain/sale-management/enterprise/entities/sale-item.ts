import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface SaleItemProps {
    productId: UniqueEntityID
    quantityOfProducts: number
    appliedPrice: number
}

export class SaleItem extends Entity<SaleItemProps> {
    get productId() {
        return this.props.productId
    }

    get quantityOfProducts() {
        return this.props.quantityOfProducts
    }

    get appliedPrice() {
        return this.props.appliedPrice
    }

    static create(props: SaleItemProps, id?: UniqueEntityID) {
        const saleItem = new SaleItem(props, id)
        return saleItem
    }
}
