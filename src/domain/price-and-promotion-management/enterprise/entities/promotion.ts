import { Entity } from '@/shared/entities/entity'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

export interface PromotionProps {
    productId: UniqueEntityID
    discount: number
    startDate: Date
    endDate: Date
}

export class Promotion extends Entity<PromotionProps> {
    get productId(): UniqueEntityID {
        return this.props.productId
    }

    get discount(): number {
        return this.props.discount
    }

    get startDate(): Date {
        return this.props.startDate
    }

    get endDate(): Date {
        return this.props.endDate
    }

    static create(props: PromotionProps) {
        const promotion = new Promotion(props)
        return promotion
    }
}
