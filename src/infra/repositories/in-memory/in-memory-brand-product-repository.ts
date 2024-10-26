import { BrandProductDAO } from '@/domain/product-management/application/DAO/brand-product-dao'
import { BrandProduct } from '@/domain/product-management/enterprise/entities/brand-product'

export class InMemoryBrandProductRepository implements BrandProductDAO {
    public brands: BrandProduct[] = []

    async create(brand: BrandProduct): Promise<void> {
        this.brands.push(brand)
    }

    async delete(brand: BrandProduct): Promise<void> {
        const itemIndex = this.brands.findIndex((item) => item.equals(brand))

        this.brands.splice(itemIndex, 1)
    }

    async findByCode(code: string): Promise<BrandProduct | null> {
        return this.brands.find((brand) => brand.code === code) || null
    }

    async listAll(): Promise<BrandProduct[]> {
        return this.brands
    }
}
