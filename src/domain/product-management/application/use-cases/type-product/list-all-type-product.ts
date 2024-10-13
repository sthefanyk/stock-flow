import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'
import { TypeProductDAO } from '../../DAO/type-product-dao'

// type ListAllTypeProductUseCaseInput = void

type ListAllTypeProductUseCaseOutput = { types: TypeProduct[] }

export class ListAllTypeProductUseCase {
    constructor(private typeProductRepository: TypeProductDAO) {}

    async execute(): Promise<ListAllTypeProductUseCaseOutput> {
        const types = await this.typeProductRepository.listAll()

        return { types }
    }
}
