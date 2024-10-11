import { Entity } from '@/shared/entities/entity'

export interface TypeSizeProps {
    codeType: string
    codeSize: string
}

export class TypeSize extends Entity<TypeSizeProps> {
    get codeType(): string {
        return this.props.codeType
    }

    get codeSize(): string {
        return this.props.codeSize
    }
}
