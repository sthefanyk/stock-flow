import { ColorProduct } from '@/domain/product-management/enterprise/entities/color-product'
import { ColorProductDAO } from '../../DAO/color-product-dao'

type FindByCodeColorProductUseCaseInput = {
    code: string
}

type FindByCodeColorProductUseCaseOutput = {
    colorProduct: ColorProduct | null
}

export class FindByCodeColorProductUseCase {
    constructor(private colorProductRepository: ColorProductDAO) {}

    async execute({
        code,
    }: FindByCodeColorProductUseCaseInput): Promise<FindByCodeColorProductUseCaseOutput> {
        const colorProduct = await this.colorProductRepository.findByCode(
            code.toUpperCase(),
        )
        return { colorProduct }
    }
}
