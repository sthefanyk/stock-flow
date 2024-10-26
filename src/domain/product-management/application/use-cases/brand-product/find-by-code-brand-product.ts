import { BrandProduct } from '@/domain/product-management/enterprise/entities/brand-product'
import { BrandProductDAO } from '../../DAO/brand-product-dao'

type FindByCodeBrandProductUseCaseInput = {
    code: string
}

type FindByCodeBrandProductUseCaseOutput = {
    brandProduct: BrandProduct | null
}

export class FindByCodeBrandProductUseCase {
    constructor(private brandProductRepository: BrandProductDAO) {}

    async execute({
        code,
    }: FindByCodeBrandProductUseCaseInput): Promise<FindByCodeBrandProductUseCaseOutput> {
        const brandProduct = await this.brandProductRepository.findByCode(
            code.toUpperCase(),
        )
        return { brandProduct }
    }
}
