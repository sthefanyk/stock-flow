import { StockDAO } from '@/domain/stock-management/application/DAO/stock-dao'
import { Stock } from '@/domain/stock-management/enterprise/entities/stock'

export class InMemoryStockRepository implements StockDAO {
    public stocks: Stock[] = []

    async create(stock: Stock): Promise<void> {
        this.stocks.push(stock)
    }

    async save(stock: Stock): Promise<void> {
        const stockIndex = this.stocks.findIndex((item) => item.equals(stock))

        this.stocks[stockIndex] = stock
    }

    async delete(stock: Stock): Promise<void> {
        this.stocks = this.stocks.filter((item) => item.equals(stock))
    }

    async findById(id: string): Promise<Stock | null> {
        const found = this.stocks.find((stock) => stock.id.toString() === id)
        return found || null
    }

    async findByProductId(productId: string): Promise<Stock | null> {
        const found = this.stocks.find(
            (stock) => stock.productId.toString() === productId,
        )
        return found || null
    }

    async listAll(): Promise<Stock[]> {
        return this.stocks
    }
}
