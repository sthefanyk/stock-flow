import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'
import { TypeProductDAO } from '../../DAO/type-product-dao'

type FindByCodeTypeProductUseCaseInput = {
    code: string
}

type FindByCodeTypeProductUseCaseOutput = {
    typeProduct: TypeProduct | null
}

export class FindByCodeTypeProductUseCase {
    constructor(private typeProductRepository: TypeProductDAO) {}

    async execute({
        code,
    }: FindByCodeTypeProductUseCaseInput): Promise<FindByCodeTypeProductUseCaseOutput> {
        const typeProduct = await this.typeProductRepository.findByCode(code)
        return { typeProduct }
    }
}
