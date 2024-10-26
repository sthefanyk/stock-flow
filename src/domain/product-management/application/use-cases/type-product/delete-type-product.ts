import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'
import { TypeProductDAO } from '../../DAO/type-product-dao'
import { SizeProductDAO } from '../../DAO/size-product-dao'

type DeleteTypeProductUseCaseInput = {
    code: string
}

type DeleteTypeProductUseCaseOutput = { typeProduct: TypeProduct }

export class DeleteTypeProductUseCase {
    constructor(
        private typeProductRepository: TypeProductDAO,
        private sizeProductRepository: SizeProductDAO,
    ) {}

    async execute({
        code,
    }: DeleteTypeProductUseCaseInput): Promise<DeleteTypeProductUseCaseOutput> {
        const typeProduct = await this.typeProductRepository.findByCode(
            code.toUpperCase(),
        )
        if (!typeProduct) throw new Error('Resource not found.')

        await this.typeProductRepository.delete(typeProduct)
        await this.sizeProductRepository.deleteManyByTypeCode(typeProduct.code)

        return { typeProduct }
    }
}
