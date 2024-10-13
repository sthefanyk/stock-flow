import { CategoryProduct } from '../../enterprise/entities/category-product'

export interface CategoryProductDAO {
    create(category: CategoryProduct): Promise<void>
    delete(category: CategoryProduct): Promise<void>
    findByCode(code: string): Promise<CategoryProduct | null>
    listAll(): Promise<CategoryProduct[]>
}
