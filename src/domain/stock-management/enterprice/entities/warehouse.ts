import { Address } from '@/domain/product-management/enterprise/value-objects/adreess'
import { Entity } from '@/shared/entities/entity'

export interface WarehouseProps {
    name: string
    location: Address
}

export class Warehouse extends Entity<WarehouseProps> {}
