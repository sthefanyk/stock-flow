import { Supplier } from '@/domain/product-management/enterprise/entities/supplier'
import { SupplierDAO } from '../../DAO/supplier-dao'
import { Contact } from '@/domain/product-management/enterprise/value-objects/contact'
import { Address } from '@/domain/product-management/enterprise/value-objects/adreess'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

type EditSupplierUseCaseInput = {
    id: string
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

type EditSupplierUseCaseOutput = { supplier: Supplier }

export class EditSupplierUseCase {
    constructor(private supplierRepository: SupplierDAO) {}

    async execute({
        id,
        name,
        contact: { email, phoneNumber },
        adreess: { street, city, state, zipCode, country },
    }: EditSupplierUseCaseInput): Promise<EditSupplierUseCaseOutput> {
        const supplier = Supplier.update(
            {
                name,
                contact: new Contact(phoneNumber, email),
                address: new Address(street, city, state, zipCode, country),
            },
            new UniqueEntityID(id),
        )

        await this.supplierRepository.save(supplier)

        return { supplier }
    }
}
