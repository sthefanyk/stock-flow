import { ColorProduct } from '@/domain/product-management/enterprise/entities/color-product'
import { ColorProductDAO } from '../../DAO/color-product-dao'

// type ListAllColorProductUseCaseInput = void

type ListAllColorProductUseCaseOutput = { colors: ColorProduct[] }

export class ListAllColorProductUseCase {
    constructor(private colorProductRepository: ColorProductDAO) {}

    async execute(): Promise<ListAllColorProductUseCaseOutput> {
        const colors = await this.colorProductRepository.listAll()

        return { colors }
    }
}
