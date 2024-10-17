import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { SaleItemList } from './sale-item-list'
import { Optional } from '@/shared/types/optional'
import { AggregateRoot } from '@/shared/entities/aggregate-root'
import { NewSaleEvent } from '../events/new-sale-event'

export interface SaleProps {
    customerId: UniqueEntityID
    dateOfSale: Date
    saleItens: SaleItemList
}

export class Sale extends AggregateRoot<SaleProps> {
    get customerId() {
        return this.props.customerId
    }

    get dateOfSale() {
        return this.props.dateOfSale
    }

    get saleItens() {
        return this.props.saleItens
    }

    static create(
        props: Optional<SaleProps, 'dateOfSale'>,
        id?: UniqueEntityID,
    ) {
        const sale = new Sale(
            {
                ...props,
                dateOfSale: new Date(),
            },
            id,
        )

        const isNewSale = !id

        if (isNewSale) {
            sale.addDomainEvent(new NewSaleEvent(sale))
        }

        return sale
    }
}
