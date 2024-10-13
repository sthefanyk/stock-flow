import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'
import { TypeProductDAO } from '../../DAO/type-product-dao'
import { SizeProduct } from '@/domain/product-management/enterprise/entities/size-product'
import { SizeProductDAO } from '../../DAO/size-product-dao'
import { SizeList } from '@/domain/product-management/enterprise/entities/size-list'

type EditTypeProductUseCaseInput = {
    code: string
    name: string
    sizes: {
        unitOfMeasure: string
        sizeList: {
            code: string
            description: string
        }[]
    }
}

type EditTypeProductUseCaseOutput = { typeProduct: TypeProduct }

export class EditTypeProductUseCase {
    constructor(
        private typeProductRepository: TypeProductDAO,
        private sizeProductRepository: SizeProductDAO,
    ) {}

    async execute({
        code,
        name,
        sizes,
    }: EditTypeProductUseCaseInput): Promise<EditTypeProductUseCaseOutput> {
        const type = await this.typeProductRepository.findByCode(code)
        if (!type) throw new Error('Resources not found.')

        const currentSizes =
            await this.sizeProductRepository.findManyByTypeCode(code)

        const sizeList = new SizeList(currentSizes)

        const sizesProduct = sizes.sizeList.map((size) => {
            return SizeProduct.create({
                typeCode: code,
                code: size.code,
                description: size.description,
                unitOfMeasure: sizes.unitOfMeasure,
            })
        })

        sizeList.update(sizesProduct)

        type.name = name
        type.sizes = sizeList

        await this.typeProductRepository.save(type)

        return { typeProduct: type }
    }
}
