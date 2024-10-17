import { Stock } from '../../enterprise/entities/stock'

export interface StockDAO {
    create(stock: Stock): Promise<void>
    save(stock: Stock): Promise<void>
    delete(stock: Stock): Promise<void>
    findById(code: string): Promise<Stock | null>
    listAll(): Promise<Stock[]>
}
