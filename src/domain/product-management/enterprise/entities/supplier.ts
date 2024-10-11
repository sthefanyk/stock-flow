import { Entity } from '@/shared/entities/entity'
import { Address } from '../value-objects/adreess'
import { Contact } from '../value-objects/contact'

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
}
