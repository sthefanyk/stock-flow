import { ColorProductDAO } from '@/domain/product-management/application/DAO/color-product-dao'
import { ColorProduct } from '@/domain/product-management/enterprise/entities/color-product'

export class InMemoryColorProductRepository implements ColorProductDAO {
    public colors: ColorProduct[] = []

    async create(color: ColorProduct): Promise<void> {
        this.colors.push(color)
    }

    async delete(color: ColorProduct): Promise<void> {
        const itemIndex = this.colors.findIndex((item) => item.equals(color))

        this.colors.splice(itemIndex, 1)
    }

    async findByCode(code: string): Promise<ColorProduct | null> {
        return this.colors.find((color) => color.code === code) || null
    }

    async listAll(): Promise<ColorProduct[]> {
        return this.colors
    }
}
