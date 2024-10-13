import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'
import { TypeProductDAO } from '../../DAO/type-product-dao'

type DeleteTypeProductUseCaseInput = {
    code: string
}

type DeleteTypeProductUseCaseOutput = { typeProduct: TypeProduct }

export class DeleteTypeProductUseCase {
    constructor(private typeProductRepository: TypeProductDAO) {}

    async execute({
        code,
    }: DeleteTypeProductUseCaseInput): Promise<DeleteTypeProductUseCaseOutput> {
        const typeProduct = await this.typeProductRepository.findByCode(code)
        if (!typeProduct) throw new Error('Resource not found.')

        await this.typeProductRepository.delete(typeProduct)

        return { typeProduct }
    }
}
