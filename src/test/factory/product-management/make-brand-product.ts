import { faker } from '@faker-js/faker'

import {
    BrandProduct,
    BrandProductProps,
} from '@/domain/product-management/enterprise/entities/brand-product'

export function makeBrandProductFactory(
    override: Partial<BrandProductProps> = {},
) {
    const brand = BrandProduct.create({
        code: faker.string.alpha({ length: 3 }).toUpperCase(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        ...override,
    })

    return brand
}
