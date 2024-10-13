import { TypeProduct } from '../../enterprise/entities/type-product'

export interface TypeProductDAO {
    create(type: TypeProduct): Promise<void>
    save(type: TypeProduct): Promise<void>
    delete(type: TypeProduct): Promise<void>
    findByCode(code: string): Promise<TypeProduct | null>
    listAll(): Promise<TypeProduct[]>
}
