import { faker } from '@faker-js/faker'

import {
    SizeProduct,
    SizeProductProps,
} from '@/domain/product-management/enterprise/entities/size-product'

export function makeSizeProductFactory(
    override: Partial<SizeProductProps> = {},
) {
    const size = SizeProduct.create({
        typeCode: faker.string.alpha({ length: 2 }).toUpperCase(),
        code: faker.number.int({ min: 33, max: 43 }).toString(),
        description: faker.commerce.productName(),
        unitOfMeasure: 'inches',
        ...override,
    })

    return size
}
