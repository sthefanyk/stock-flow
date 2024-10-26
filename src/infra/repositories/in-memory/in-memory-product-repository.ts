import { ProductDAO } from '@/domain/product-management/application/DAO/product-dao'
import { Product } from '@/domain/product-management/enterprise/entities/product'

export class InMemoryProductRepository implements ProductDAO {
    public products: Product[] = []

    async create(product: Product): Promise<void> {
        await this.products.push(product)
    }

    async save(product: Product): Promise<void> {
        const productIndex = this.products.findIndex(
            (item) => item.id.toString() === product.id.toString(),
        )

        this.products[productIndex] = product
    }

    async findById(id: string): Promise<Product | null> {
        return (
            this.products.find((product) => product.id.toString() === id) ||
            null
        )
    }

    async delete(product: Product): Promise<void> {
        const itemIndex = this.products.findIndex((item) =>
            item.equals(product),
        )

        this.products.splice(itemIndex, 1)
    }

    async listAll(): Promise<Product[]> {
        return this.products
    }

    async searchBySku(sku: string): Promise<Product[]> {
        throw new Error('Method not implemented.')
    }
}
