import { BrandProduct } from '../../enterprise/entities/brand-product'

export interface BrandProductDAO {
    create(brand: BrandProduct): Promise<void>
    delete(brand: BrandProduct): Promise<void>
    findByCode(code: string): Promise<BrandProduct | null>
    listAll(): Promise<BrandProduct[]>
}
