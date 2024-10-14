import { Supplier } from '@/domain/product-management/enterprise/entities/supplier'
import { SupplierDAO } from '../../DAO/supplier-dao'

type FindByNameSupplierUseCaseInput = {
    name: string
}

type FindByNameSupplierUseCaseOutput = {
    supplier: Supplier | null
}

export class FindByNameSupplierUseCase {
    constructor(private supplierRepository: SupplierDAO) {}

    async execute({
        name,
    }: FindByNameSupplierUseCaseInput): Promise<FindByNameSupplierUseCaseOutput> {
        const supplier = await this.supplierRepository.findByName(name)
        return { supplier }
    }
}
