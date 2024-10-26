import { faker } from '@faker-js/faker'

import {
    CategoryProduct,
    CategoryProductProps,
} from '@/domain/product-management/enterprise/entities/category-product'

export function makeCategoryProductFactory(
    override: Partial<CategoryProductProps> = {},
) {
    const category = CategoryProduct.create({
        code: faker.string.alpha({ length: 3 }).toUpperCase(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        ...override,
    })

    return category
}
