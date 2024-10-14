import { Supplier } from '@/domain/product-management/enterprise/entities/supplier'
import { SupplierDAO } from '../../DAO/supplier-dao'
import { Contact } from '@/domain/product-management/enterprise/value-objects/contact'
import { Address } from '@/domain/product-management/enterprise/value-objects/adreess'

type CreateSupplierUseCaseInput = {
    name: string
    contact: {
        phoneNumber: string
        email: string
    }
    adreess: {
        street: string
        city: string
        state: string
        zipCode: string
        country: string
    }
}

type CreateSupplierUseCaseOutput = { supplier: Supplier }

export class CreateSupplierUseCase {
    constructor(private supplierRepository: SupplierDAO) {}

    async execute({
        name,
        contact: { email, phoneNumber },
        adreess: { street, city, state, zipCode, country },
    }: CreateSupplierUseCaseInput): Promise<CreateSupplierUseCaseOutput> {
        const supplier = Supplier.create({
            name,
            contact: new Contact(phoneNumber, email),
            address: new Address(street, city, state, zipCode, country),
        })

        await this.supplierRepository.create(supplier)

        return { supplier }
    }
}
