import { Product } from '../../enterprise/entities/product'

export interface ProductDAO {
    create(product: Product): Promise<void>
    save(product: Product): Promise<void>
    delete(product: Product): Promise<void>
    findById(code: string): Promise<Product | null>
    listAll(): Promise<Product[]>
    searchBySku(sku: string): Promise<Product[]>
}
