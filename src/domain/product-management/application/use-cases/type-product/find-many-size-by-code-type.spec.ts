import { InMemoryTypeProductRepository } from '@/infra/repositories/in-memory/in-memory-type-product-repository'
import { makeTypeProductFactory } from '@/test/factory/product-management/make-type-product'
import { FindManySizeByCodeTypeProductUseCase } from './find-many-size-by-code-type'
import { InMemorySizeProductRepository } from '@/infra/repositories/in-memory/in-memory-size-product-repository'
import { SizeList } from '@/domain/product-management/enterprise/entities/size-list'
import { makeSizeProductFactory } from '@/test/factory/product-management/make-size-product'

describe('Find many size by code type', () => {
    it('should be able to find sizes by code type', async () => {
        const repository = new InMemoryTypeProductRepository()
        const repositorySize = new InMemorySizeProductRepository()
        const usecase = new FindManySizeByCodeTypeProductUseCase(repositorySize)

        const code = 'tv'

        const type = makeTypeProductFactory({
            code,
            sizes: new SizeList([
                makeSizeProductFactory({ code: '37', typeCode: code }),
                makeSizeProductFactory({ code: '38', typeCode: code }),
                makeSizeProductFactory({ code: '39', typeCode: code }),
                makeSizeProductFactory({ code: '40', typeCode: code }),
            ]),
        })

        repository.create(type)
        repositorySize.saveAll(type.sizes.currentItems)

        const { sizes } = await usecase.execute({ code: type.code })

        expect(sizes).toHaveLength(4)
        expect(sizes[0]!.typeCode).toBe('TV')
        expect(sizes[3]!.code).toBe('40')
    })
})
