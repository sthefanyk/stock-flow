import { faker } from '@faker-js/faker'

import {
    ColorProduct,
    ColorProductProps,
} from '@/domain/product-management/enterprise/entities/color-product'

export function makeColorProductFactory(
    override: Partial<ColorProductProps> = {},
) {
    const color = ColorProduct.create({
        code: faker.string.alpha({ length: 1 }).toUpperCase(),
        name: faker.color.human(),
        ...override,
    })

    return color
}
