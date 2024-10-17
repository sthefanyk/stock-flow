import { SaleItem } from '@/domain/sale-management/enterprise/entities/sale-item'
import { SaleDAO } from '../../DAO/sale-dao'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'
import { Sale } from '@/domain/sale-management/enterprise/entities/sale'
import { SaleItemList } from '@/domain/sale-management/enterprise/entities/sale-item-list'
import { DomainEvents } from '@/shared/events/domain-events'

type NewSaleUseCaseInput = {
    customerId: string
    saleItens: {
        productId: string
        quantityOfProducts: number
        appliedPrice: number
    }[]
}

type NewSaleUseCaseOutput = { sale: Sale }

export class NewSaleUseCase {
    constructor(private saleRepository: SaleDAO) {}

    async execute({
        customerId,
        saleItens,
    }: NewSaleUseCaseInput): Promise<NewSaleUseCaseOutput> {
        const itensSale = saleItens.map((item) => {
            return SaleItem.create({
                productId: new UniqueEntityID(item.productId),
                quantityOfProducts: item.quantityOfProducts,
                appliedPrice: item.appliedPrice,
            })
        })

        const sale = Sale.create({
            customerId: new UniqueEntityID(customerId),
            saleItens: new SaleItemList(itensSale),
        })

        await this.saleRepository.newSale(sale)

        DomainEvents.dispatchEventsForAggregate(sale.id)

        return { sale }
    }
}
