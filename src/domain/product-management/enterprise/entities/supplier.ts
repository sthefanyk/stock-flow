import { Entity } from '@/shared/entities/entity'
import { Address } from '../value-objects/adreess'
import { Contact } from '../value-objects/contact'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface SupplierProps {
    name: string
    contact: Contact
    address: Address
}

export class Supplier extends Entity<SupplierProps> {
    get name() {
        return this.props.name
    }

    get contact() {
        return this.props.contact
    }

    get address() {
        return this.props.address
    }

    static update(props: SupplierProps, id?: UniqueEntityID) {
        const supplier = new Supplier(props, id)
        return supplier
    }

    static create(props: SupplierProps, id?: UniqueEntityID) {
        const supplier = new Supplier(props, id)
        return supplier
    }
}
