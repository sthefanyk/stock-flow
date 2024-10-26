import { InMemoryTypeProductRepository } from '@/infra/repositories/in-memory/in-memory-type-product-repository'
import { DeleteTypeProductUseCase } from './delete-type-product'
import { makeTypeProductFactory } from '@/test/factory/product-management/make-type-product'
import { InMemorySizeProductRepository } from '@/infra/repositories/in-memory/in-memory-size-product-repository'

describe('Delete type', () => {
    it('should be able to delete type', async () => {
        const repository = new InMemoryTypeProductRepository()
        const repositorySize = new InMemorySizeProductRepository()
        const usecase = new DeleteTypeProductUseCase(repository, repositorySize)

        const type = makeTypeProductFactory({
            code: 'tv',
        })

        repository.create(type)
        repositorySize.saveAll(type.sizes.currentItems)

        await usecase.execute({
            code: 'tv',
        })

        expect(repository.types).length(0)
        expect(repositorySize.sizes).length(0)
    })
})
