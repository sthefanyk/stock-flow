import { Supplier } from '../../enterprise/entities/supplier'

export interface SupplierDAO {
    create(supplier: Supplier): Promise<void>
    save(supplier: Supplier): Promise<void>
    delete(supplier: Supplier): Promise<void>
    findById(id: string): Promise<Supplier | null>
    findByName(name: string): Promise<Supplier | null>
    listAll(): Promise<Supplier[]>
}
