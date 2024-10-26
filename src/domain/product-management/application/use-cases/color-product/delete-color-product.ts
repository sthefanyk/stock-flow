import { ColorProduct } from '@/domain/product-management/enterprise/entities/color-product'
import { ColorProductDAO } from '../../DAO/color-product-dao'

type DeleteColorProductUseCaseInput = {
    code: string
}

type DeleteColorProductUseCaseOutput = { colorProduct: ColorProduct }

export class DeleteColorProductUseCase {
    constructor(private colorProductRepository: ColorProductDAO) {}

    async execute({
        code,
    }: DeleteColorProductUseCaseInput): Promise<DeleteColorProductUseCaseOutput> {
        const colorProduct = await this.colorProductRepository.findByCode(
            code.toUpperCase(),
        )
        if (!colorProduct) throw new Error('Resource not found.')

        await this.colorProductRepository.delete(colorProduct)

        return { colorProduct }
    }
}
