import { Entity } from '@/shared/entities/entity'
import { Address } from '../value-objects/adreess'

export interface WarehouseProps {
    name: string
    location: Address
}

export class Warehouse extends Entity<WarehouseProps> {}
