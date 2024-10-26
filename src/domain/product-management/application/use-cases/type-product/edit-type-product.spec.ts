import { InMemoryTypeProductRepository } from '@/infra/repositories/in-memory/in-memory-type-product-repository'
import { EditTypeProductUseCase } from './edit-type-product'
import { makeTypeProductFactory } from '@/test/factory/product-management/make-type-product'
import { InMemorySizeProductRepository } from '@/infra/repositories/in-memory/in-memory-size-product-repository'

describe('Edit type', () => {
    it('should be able to edit type', async () => {
        const repository = new InMemoryTypeProductRepository()
        const repositorySize = new InMemorySizeProductRepository()
        const usecase = new EditTypeProductUseCase(repository, repositorySize)

        const type = makeTypeProductFactory({
            code: 'tv',
            name: 'name',
        })

        repository.create(type)
        repositorySize.saveAll(type.sizes.currentItems)

        await usecase.execute({
            code: 'tv',
            name: 'television',
            sizes: {
                sizeList: [{ code: '55' }],
                unitOfMeasure: 'inches',
            },
        })

        expect(repository.types[0].code).toBe('TV')
        expect(repository.types[0].name).toBe('Television')
        expect(repositorySize.sizes).length(1)
        expect(repositorySize.sizes[0].code).toBe('55')
    })
})
