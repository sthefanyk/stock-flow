import { BrandProduct } from '@/domain/product-management/enterprise/entities/brand-product'
import { BrandProductDAO } from '../../DAO/brand-product-dao'

// type ListAllBrandProductUseCaseInput = void

type ListAllBrandProductUseCaseOutput = { brands: BrandProduct[] }

export class ListAllBrandProductUseCase {
    constructor(private brandProductRepository: BrandProductDAO) {}

    async execute(): Promise<ListAllBrandProductUseCaseOutput> {
        const brands = await this.brandProductRepository.listAll()

        return { brands }
    }
}
