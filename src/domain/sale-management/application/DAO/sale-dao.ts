import { Sale } from '../../enterprise/entities/sale'

export interface SaleDAO {
    newSale(sale: Sale): void
}
