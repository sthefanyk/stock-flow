import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { SaleItemList } from './sale-item-list'
import { Entity } from '@/shared/entities/entity'

export interface SaleProps {
    clientId: UniqueEntityID
    date: Date
    itens: SaleItemList
}

export class Sale extends Entity<SaleProps> {}
