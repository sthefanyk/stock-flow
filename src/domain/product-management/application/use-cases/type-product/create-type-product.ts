import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'
import { TypeProductDAO } from '../../DAO/type-product-dao'
import { SizeProduct } from '@/domain/product-management/enterprise/entities/size-product'
import { SizeList } from '@/domain/product-management/enterprise/entities/size-list'
import { SizeProductDAO } from '../../DAO/size-product-dao'

type CreateTypeProductUseCaseInput = {
    code: string
    name: string
    sizes: {
        unitOfMeasure: string
        sizeList: {
            code: string
            description?: string
        }[]
    }
}

type CreateTypeProductUseCaseOutput = { typeProduct: TypeProduct }

export class CreateTypeProductUseCase {
    constructor(
        private typeProductRepository: TypeProductDAO,
        private sizeProductRepository: SizeProductDAO,
    ) {}

    async execute({
        code,
        name,
        sizes,
    }: CreateTypeProductUseCaseInput): Promise<CreateTypeProductUseCaseOutput> {
        const type = await this.typeProductRepository.findByCode(
            code.toUpperCase(),
        )
        if (type) throw new Error('Resources already exist.')

        const sizesProduct = sizes.sizeList.map((size) => {
            return SizeProduct.create({
                typeCode: code,
                code: size.code,
                description: size.description,
                unitOfMeasure: sizes.unitOfMeasure,
            })
        })

        const typeProduct = TypeProduct.create({
            code,
            name,
            sizes: new SizeList(sizesProduct),
        })

        await this.typeProductRepository.create(typeProduct)
        await this.sizeProductRepository.saveAll(typeProduct.sizes.currentItems)

        return { typeProduct }
    }
}
