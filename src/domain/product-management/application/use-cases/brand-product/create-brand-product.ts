import { BrandProduct } from '@/domain/product-management/enterprise/entities/brand-product'
import { BrandProductDAO } from '../../DAO/brand-product-dao'

type CreateBrandProductUseCaseInput = {
    code: string
    name: string
    description?: string
}

type CreateBrandProductUseCaseOutput = { brandProduct: BrandProduct }

export class CreateBrandProductUseCase {
    constructor(private brandProductRepository: BrandProductDAO) {}

    async execute({
        code,
        name,
        description,
    }: CreateBrandProductUseCaseInput): Promise<CreateBrandProductUseCaseOutput> {
        const brand = await this.brandProductRepository.findByCode(
            code.toUpperCase(),
        )
        if (brand) throw new Error('Resources already exist.')

        const brandProduct = BrandProduct.create({
            code,
            name,
            description,
        })

        await this.brandProductRepository.create(brandProduct)

        return { brandProduct }
    }
}
