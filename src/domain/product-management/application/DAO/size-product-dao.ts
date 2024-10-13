import { SizeProduct } from '../../enterprise/entities/size-product'

export interface SizeProductDAO {
    findManyByTypeCode(typeCode: string): Promise<SizeProduct[]>
    deleteManyByTypeCode(typeCode: string): Promise<void>
}
