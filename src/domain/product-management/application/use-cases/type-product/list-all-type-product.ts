import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'
import { TypeProductDAO } from '../../DAO/type-product-dao'
import { SizeProductDAO } from '../../DAO/size-product-dao'
import { SizeList } from '@/domain/product-management/enterprise/entities/size-list'

// type ListAllTypeProductUseCaseInput = void

type ListAllTypeProductUseCaseOutput = { types: TypeProduct[] }

export class ListAllTypeProductUseCase {
    constructor(
        private typeProductRepository: TypeProductDAO,
        private sizeProductRepository: SizeProductDAO,
    ) {}

    async execute(): Promise<ListAllTypeProductUseCaseOutput> {
        const types = await this.typeProductRepository.listAll()

        // TODO: Refactor to improve performance by reducing the number of database queries
        for (const type of types) {
            const sizes = await this.sizeProductRepository.findManyByTypeCode(
                type.code,
            )
            type.sizes = new SizeList(sizes)
        }

        return { types }
    }
}
