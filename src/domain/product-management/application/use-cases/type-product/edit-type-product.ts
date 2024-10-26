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
            description?: string
        }[]
    }
}

type EditTypeProductUseCaseOutput = { typeProduct: TypeProduct }

// TODO: Refactor
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
        const type = await this.typeProductRepository.findByCode(
            code.toUpperCase(),
        )
        if (!type) throw new Error('Resources not found.')

        const currentSizes =
            await this.sizeProductRepository.findManyByTypeCode(
                code.toUpperCase(),
            )

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

        const typeUpdated = TypeProduct.create({
            code,
            name,
            sizes: sizeList,
        })

        await this.typeProductRepository.save(typeUpdated)
        await this.sizeProductRepository.deleteManyByTypeCode(typeUpdated.code)
        await this.sizeProductRepository.saveAll(typeUpdated.sizes.currentItems)

        return { typeProduct: type }
    }
}
