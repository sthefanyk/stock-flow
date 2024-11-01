import { NewSaleEvent } from '@/domain/sale-management/enterprise/events/new-sale-event'
import { DomainEvents } from '@/shared/events/domain-events'
import { EventHandler } from '@/shared/events/event-handler'
import { StockDAO } from '../DAO/stock-dao'
import { DecreasesStockOfProductSoldUseCase } from '../use-cases/DecreasesStockOfProductSold'

export class OnNewSale implements EventHandler {
    constructor(private stockRepository: StockDAO) {
        this.setupSubscriptions()
    }

    setupSubscriptions(): void {
        DomainEvents.register(
            this.decreasesStockOfProductSold.bind(this),
            NewSaleEvent.name,
        )
    }

    private async decreasesStockOfProductSold({ sale }: NewSaleEvent) {
        const usecase = new DecreasesStockOfProductSoldUseCase(
            this.stockRepository,
        )

        if (sale) {
            usecase.execute({ sale })
        }
    }
}
