import { Supplier } from '@/domain/product-management/enterprise/entities/supplier'
import { SupplierDAO } from '../../DAO/supplier-dao'

type FindByIdSupplierUseCaseInput = {
    id: string
}

type FindByIdSupplierUseCaseOutput = {
    supplier: Supplier | null
}

export class FindByIdSupplierUseCase {
    constructor(private supplierRepository: SupplierDAO) {}

    async execute({
        id,
    }: FindByIdSupplierUseCaseInput): Promise<FindByIdSupplierUseCaseOutput> {
        const supplier = await this.supplierRepository.findById(id)
        return { supplier }
    }
}
