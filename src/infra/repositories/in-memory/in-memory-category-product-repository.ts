import { CategoryProductDAO } from '@/domain/product-management/application/DAO/category-product-dao'
import { CategoryProduct } from '@/domain/product-management/enterprise/entities/category-product'

export class InMemoryCategoryProductRepository implements CategoryProductDAO {
    public categories: CategoryProduct[] = []

    async create(category: CategoryProduct): Promise<void> {
        this.categories.push(category)
    }

    async delete(category: CategoryProduct): Promise<void> {
        const itemIndex = this.categories.findIndex((item) =>
            item.equals(category),
        )

        this.categories.splice(itemIndex, 1)
    }

    async findByCode(code: string): Promise<CategoryProduct | null> {
        return (
            this.categories.find((category) => category.code === code) || null
        )
    }

    async listAll(): Promise<CategoryProduct[]> {
        return this.categories
    }
}
