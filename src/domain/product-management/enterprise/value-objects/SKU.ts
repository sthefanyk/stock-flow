import { BrandProduct } from '../entities/brand-product'
import { CategoryProduct } from '../entities/category-product'
import { ColorProduct } from '../entities/color-product'
import { SizeProduct } from '../entities/size-product'
import { TypeProduct } from '../entities/type-product'

export class SKU {
    constructor(
        private readonly category: CategoryProduct,
        private readonly brand: BrandProduct,
        private readonly type: TypeProduct,
        private readonly size: SizeProduct,
        private readonly color: ColorProduct,
    ) {
        if (!type.isValidSizeForType(size)) {
            throw new Error('This size is not valid for this type of product.')
        }
    }

    /**
     * Returns the SKU (Stock Keeping Unit) formatted as a string.
     *
     * The SKU is composed of several parts separated by hyphens, following the format:
     * `category-code - brand-code - type-code - size-code - color-code`.
     * If `size` is not available, the code `NA` (not applicable) will be used instead.
     *
     * @returns {string} The formatted SKU as a string.
     *
     * Example return:
     * - "ELE-SAM-TV-55-B"
     * - "ELE-SAM-TV-NA-B" (when size is not present)
     *
     * @example
     * const product = {
     *   category: { code: "ELE", ... },
     *   brand: { code: "SAM", ... },
     *   type: { code: "TV", ... },
     *   size: { code: "55", ... }, // or null if size is not applicable
     *   color: { code: "B", ... }
     * };
     *
     * product.getSKU(); // "ELE-SAM-TV-55-B"
     *
     * @example
     * const productWithoutSize = {
     *   category: { code: "ELE" },
     *   brand: { code: "SAM" },
     *   type: { code: "TV" },
     *   size: null, // When size is not available
     *   color: { code: "B" }
     * };
     *
     * productWithoutSize.getSKU(); // "ELE-SAM-TV-NA-B"
     */
    getSKU(): string {
        return `${this.category.code}-${this.brand.code}-${this.type.code}-${
            this.size ? this.size.code : 'NA'
        }-${this.color.code}`
    }
}
