import { Entity } from '@/shared/entities/entity'
import { Contact } from '../value-objects/contact'

export interface CustomerProps {
    name: string
    contact: Contact
}

export class Customer extends Entity<CustomerProps> {}
