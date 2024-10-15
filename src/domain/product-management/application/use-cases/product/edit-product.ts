import { Product } from '@/domain/product-management/enterprise/entities/product'
import { SKU } from '@/domain/product-management/enterprise/value-objects/SKU'
import { CategoryProductDAO } from '../../DAO/category-product-dao'
import { BrandProductDAO } from '../../DAO/brand-product-dao'
import { TypeProductDAO } from '../../DAO/type-product-dao'
import { SizeProductDAO } from '../../DAO/size-product-dao'
import { ColorProductDAO } from '../../DAO/color-product-dao'
import { ProductDAO } from '../../DAO/product-dao'
import { UniqueEntityID } from '@/shared/value-objects/unique-entity-id'

type EditProductUseCaseInput = {
    id: string
    name: string
    description: string
    categoryCode: string
    brandCode: string
    typeCode: string
    sizeCode: string
    colorCode: string
    cost: number
    quantityInStock: number
    minimumQuantity: number
}

type EditProductUseCaseOutput = { productUpdated: Product }

export class EditProductUseCase {
    constructor(
        private productRepository: ProductDAO,
        private categoryProductRepository: CategoryProductDAO,
        private brandProductRepository: BrandProductDAO,
        private typeProductRepository: TypeProductDAO,
        private sizeProductRepository: SizeProductDAO,
        private colorProductRepository: ColorProductDAO,
    ) {}

    async execute({
        id,
        name,
        description,
        categoryCode,
        brandCode,
        typeCode,
        sizeCode,
        colorCode,
        cost,
        quantityInStock,
        minimumQuantity,
    }: EditProductUseCaseInput): Promise<EditProductUseCaseOutput> {
        const product = await this.productRepository.findById(id)
        if (!product) throw new Error('Product not found.')

        const category =
            await this.categoryProductRepository.findByCode(categoryCode)
        if (!category) throw new Error('Category not found.')

        const brand = await this.brandProductRepository.findByCode(brandCode)
        if (!brand) throw new Error('Brand not found.')

        const type = await this.typeProductRepository.findByCode(typeCode)
        if (!type) throw new Error('Type not found.')

        const size = await this.sizeProductRepository.findByTypeCodeAndSizeCode(
            typeCode,
            sizeCode,
        )
        if (!size) throw new Error('Size not found.')

        const color = await this.colorProductRepository.findByCode(colorCode)
        if (!color) throw new Error('Color not found.')

        const productUpdated = Product.update(
            {
                SKU: new SKU(category, brand, type, size, color),
                name,
                description,
                cost,
                quantityInStock,
                minimumQuantity,
            },
            new UniqueEntityID(id),
        )

        await this.productRepository.save(productUpdated)

        return { productUpdated }
    }
}
