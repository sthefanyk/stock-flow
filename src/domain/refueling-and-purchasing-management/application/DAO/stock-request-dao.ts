import { StockRequest } from '../../enterprise/entities/stock-request'

export interface StockRequestDAO {
    generate(request: StockRequest): void
}
