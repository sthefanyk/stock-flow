import { BrandProduct } from '@/domain/product-management/enterprise/entities/brand-product'
import { BrandProductDAO } from '../../DAO/brand-product-dao'

type DeleteBrandProductUseCaseInput = {
    code: string
}

type DeleteBrandProductUseCaseOutput = { brandProduct: BrandProduct }

export class DeleteBrandProductUseCase {
    constructor(private brandProductRepository: BrandProductDAO) {}

    async execute({
        code,
    }: DeleteBrandProductUseCaseInput): Promise<DeleteBrandProductUseCaseOutput> {
        const brandProduct = await this.brandProductRepository.findByCode(code)
        if (!brandProduct) throw new Error('Resource not found.')

        await this.brandProductRepository.delete(brandProduct)

        return { brandProduct }
    }
}
