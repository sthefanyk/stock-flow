import { ColorProduct } from '@/domain/product-management/enterprise/entities/color-product'
import { ColorProductDAO } from '../../DAO/color-product-dao'

type CreateColorProductUseCaseInput = {
    code: string
    name: string
}

type CreateColorProductUseCaseOutput = { colorProduct: ColorProduct }

export class CreateColorProductUseCase {
    constructor(private colorProductRepository: ColorProductDAO) {}

    async execute({
        code,
        name,
    }: CreateColorProductUseCaseInput): Promise<CreateColorProductUseCaseOutput> {
        const color = await this.colorProductRepository.findByCode(
            code.toUpperCase(),
        )
        if (color) throw new Error('Resources already exist.')

        const colorProduct = ColorProduct.create({
            code,
            name,
        })

        await this.colorProductRepository.create(colorProduct)

        return { colorProduct }
    }
}
