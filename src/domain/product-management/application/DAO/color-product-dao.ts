import { ColorProduct } from '../../enterprise/entities/color-product'

export interface ColorProductDAO {
    create(color: ColorProduct): Promise<void>
    delete(color: ColorProduct): Promise<void>
    findByCode(code: string): Promise<ColorProduct | null>
    listAll(): Promise<ColorProduct[]>
}
