import { faker } from '@faker-js/faker'

import {
    TypeProduct,
    TypeProductProps,
} from '@/domain/product-management/enterprise/entities/type-product'
import { SizeList } from '@/domain/product-management/enterprise/entities/size-list'
import { makeSizeProductFactory } from './make-size-product'

export function makeTypeProductFactory(
    override: Partial<TypeProductProps> = {},
) {
    const code =
        override.code ?? faker.string.alpha({ length: 2 }).toUpperCase()

    const sizeList = new SizeList([
        makeSizeProductFactory({ typeCode: code }),
        makeSizeProductFactory({ typeCode: code }),
        makeSizeProductFactory({ typeCode: code }),
    ])

    const type = TypeProduct.create({
        code,
        name: faker.commerce.productName(),
        sizes: sizeList,
        ...override,
    })

    return type
}
