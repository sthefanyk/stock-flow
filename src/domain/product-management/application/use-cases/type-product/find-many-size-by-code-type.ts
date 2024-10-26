import { SizeProductDAO } from '../../DAO/size-product-dao'
import { SizeProduct } from '@/domain/product-management/enterprise/entities/size-product'

type FindManySizeByCodeTypeProductUseCaseInput = {
    code: string
}

type FindManySizeByCodeTypeProductUseCaseOutput = {
    sizes: SizeProduct[]
}

export class FindManySizeByCodeTypeProductUseCase {
    constructor(private sizeProductRepository: SizeProductDAO) {}

    async execute({
        code,
    }: FindManySizeByCodeTypeProductUseCaseInput): Promise<FindManySizeByCodeTypeProductUseCaseOutput> {
        const sizeProduct = await this.sizeProductRepository.findManyByTypeCode(
            code.toUpperCase(),
        )
        return { sizes: sizeProduct }
    }
}
