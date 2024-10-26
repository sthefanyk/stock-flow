import { SizeProduct } from '../../enterprise/entities/size-product'

export interface SizeProductDAO {
    saveAll(sizes: SizeProduct[]): Promise<void>
    findByTypeCodeAndSizeCode(
        typeCode: string,
        sizeCode: string,
    ): Promise<SizeProduct | null>
    findManyByTypeCode(typeCode: string): Promise<SizeProduct[]>
    deleteManyByTypeCode(typeCode: string): Promise<void>
}
