import { Supplier } from '@/domain/product-management/enterprise/entities/supplier'
import { SupplierDAO } from '../../DAO/supplier-dao'

// type ListAllSupplierUseCaseInput = void

type ListAllSupplierUseCaseOutput = { suppliers: Supplier[] }

export class ListAllSupplierUseCase {
    constructor(private supplierRepository: SupplierDAO) {}

    async execute(): Promise<ListAllSupplierUseCaseOutput> {
        const suppliers = await this.supplierRepository.listAll()

        return { suppliers }
    }
}
