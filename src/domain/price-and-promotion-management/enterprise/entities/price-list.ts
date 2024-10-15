import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface PriceListProps {
    productId: UniqueEntityID
    price: number
}

export class PriceList extends Entity<PriceListProps> {
    get productId(): UniqueEntityID {
        return this.props.productId
    }

    get price(): number {
        return this.props.price
    }

    static create(props: PriceListProps) {
        const priceList = new PriceList(props)
        return priceList
    }
}
