import { InMemoryTypeProductRepository } from '@/infra/repositories/in-memory/in-memory-type-product-repository'
import { makeTypeProductFactory } from '@/test/factory/product-management/make-type-product'
import { ListAllTypeProductUseCase } from './list-all-type-product'
import { InMemorySizeProductRepository } from '@/infra/repositories/in-memory/in-memory-size-product-repository'
import { SizeList } from '@/domain/product-management/enterprise/entities/size-list'

describe('List all types', () => {
    it('should be able to find type by code', async () => {
        const repository = new InMemoryTypeProductRepository()
        const repositorySize = new InMemorySizeProductRepository()
        const usecase = new ListAllTypeProductUseCase(
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

        const type = makeTypeProductFactory()

        repository.create(type)
        repositorySize.saveAll(type.sizes.currentItems)

        const { types } = await usecase.execute()

        expect(types).toHaveLength(2)
        expect(types[0]!.code).toBe('TV')
        expect(types[0]!.sizes.currentItems).toHaveLength(3)
        expect(types[0]!.sizes.currentItems[0].typeCode).toBe('TV')
    })
})
