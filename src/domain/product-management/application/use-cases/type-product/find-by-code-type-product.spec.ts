import { InMemoryTypeProductRepository } from '@/infra/repositories/in-memory/in-memory-type-product-repository'
import { FindByCodeTypeProductUseCase } from './find-by-code-type-product'
import { makeTypeProductFactory } from '@/test/factory/product-management/make-type-product'
import { TypeProduct } from '@/domain/product-management/enterprise/entities/type-product'
import { SizeList } from '@/domain/product-management/enterprise/entities/size-list'
import { InMemorySizeProductRepository } from '@/infra/repositories/in-memory/in-memory-size-product-repository'

describe('Find by code type', () => {
    it('should be able to find type by code', async () => {
        const repository = new InMemoryTypeProductRepository()
        const repositorySize = new InMemorySizeProductRepository()
        const usecase = new FindByCodeTypeProductUseCase(
            repository,
            repositorySize,
        )

        const code = 'tv'

        repository.create(
            makeTypeProductFactory({ code, sizes: new SizeList([]) }),
        )

        repositorySize.saveAll(
            makeTypeProductFactory({ code }).sizes.currentItems,
        )

        const { typeProduct } = await usecase.execute({
            code: 'tv',
        })

        expect(typeProduct).toBeInstanceOf(TypeProduct)
        expect(typeProduct!.code).toBe('TV')
        expect(typeProduct!.sizes.currentItems).toHaveLength(3)
    })
})
