import { StockRequest } from '@/domain/refueling-and-purchasing-management/enterprise/entities/stock-request'
import { StockRequestDAO } from '../../DAO/stock-request-dao'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

type GenerateStockRequestUseCaseInput = {
    productId: string
    quantity: number
}

type GenerateStockRequestUseCaseOutput = { stockRequest: StockRequest }

export class GenerateStockRequestUseCase {
    constructor(private stockRequestRepository: StockRequestDAO) {}

    async execute({
        productId,
        quantity,
    }: GenerateStockRequestUseCaseInput): Promise<GenerateStockRequestUseCaseOutput> {
        const stockRequest = StockRequest.create({
            productId: new UniqueEntityID(productId),
            quantity,
        })

        this.stockRequestRepository.generate(stockRequest)

        return { stockRequest }
    }
}
