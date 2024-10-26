import { SizeProductDAO } from '@/domain/product-management/application/DAO/size-product-dao'
import { SizeProduct } from '@/domain/product-management/enterprise/entities/size-product'

export class InMemorySizeProductRepository implements SizeProductDAO {
    public sizes: SizeProduct[] = []

    async saveAll(sizesList: SizeProduct[]): Promise<void> {
        sizesList.forEach((size) => this.sizes.push(size))
    }

    async findByTypeCodeAndSizeCode(
        typeCode: string,
        sizeCode: string,
    ): Promise<SizeProduct | null> {
        const found = this.sizes.find(
            (sizeProduct) =>
                sizeProduct.typeCode === typeCode &&
                sizeProduct.code === sizeCode,
        )
        return found || null
    }

    async findManyByTypeCode(typeCode: string): Promise<SizeProduct[]> {
        return this.sizes.filter(
            (sizeProduct) => sizeProduct.typeCode === typeCode,
        )
    }

    async deleteManyByTypeCode(typeCode: string): Promise<void> {
        this.sizes = this.sizes.filter(
            (sizeProduct) => sizeProduct.typeCode !== typeCode,
        )
    }
}
