import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'
import { TypeProductDAO } from '../../DAO/type-product-dao'
import { SizeProductDAO } from '../../DAO/size-product-dao'
import { SizeList } from '@/domain/product-management/enterprise/entities/size-list'

type FindByCodeTypeProductUseCaseInput = {
    code: string
}

type FindByCodeTypeProductUseCaseOutput = {
    typeProduct: TypeProduct | null
}

export class FindByCodeTypeProductUseCase {
    constructor(
        private typeProductRepository: TypeProductDAO,
        private sizeProductRepository: SizeProductDAO,
    ) {}

    async execute({
        code,
    }: FindByCodeTypeProductUseCaseInput): Promise<FindByCodeTypeProductUseCaseOutput> {
        const typeProduct = await this.typeProductRepository.findByCode(
            code.toUpperCase(),
        )

        if (typeProduct) {
            const sizes = await this.sizeProductRepository.findManyByTypeCode(
                code.toUpperCase(),
            )

            typeProduct.sizes = new SizeList(sizes)
        }

        return { typeProduct }
    }
}
