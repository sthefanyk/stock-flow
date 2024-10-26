import { TypeProductDAO } from '@/domain/product-management/application/DAO/type-product-dao'
import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'

export class InMemoryTypeProductRepository implements TypeProductDAO {
    public types: TypeProduct[] = []

    async create(type: TypeProduct): Promise<void> {
        this.types.push(type)
    }

    async save(type: TypeProduct): Promise<void> {
        const typeIndex = this.types.findIndex(
            (item) => item.code === type.code,
        )

        this.types[typeIndex] = type
    }

    async delete(type: TypeProduct): Promise<void> {
        const itemIndex = this.types.findIndex((item) => item.equals(type))

        this.types.splice(itemIndex, 1)
    }

    async findByCode(code: string): Promise<TypeProduct | null> {
        return this.types.find((type) => type.code === code) || null
    }

    async listAll(): Promise<TypeProduct[]> {
        return this.types
    }
}
