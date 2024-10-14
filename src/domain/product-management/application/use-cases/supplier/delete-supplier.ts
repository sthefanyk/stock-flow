import { Supplier } from '@/domain/product-management/enterprise/entities/supplier'
import { SupplierDAO } from '../../DAO/supplier-dao'

type DeleteSupplierUseCaseInput = {
    id: string
}

type DeleteSupplierUseCaseOutput = { supplier: Supplier }

export class DeleteSupplierUseCase {
    constructor(private supplierRepository: SupplierDAO) {}

    async execute({
        id,
    }: DeleteSupplierUseCaseInput): Promise<DeleteSupplierUseCaseOutput> {
        const supplier = await this.supplierRepository.findById(id)
        if (!supplier) throw new Error('Resource not found.')

        await this.supplierRepository.delete(supplier)

        return { supplier }
    }
}
