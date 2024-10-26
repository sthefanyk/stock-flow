import { InMemoryTypeProductRepository } from '@/infra/repositories/in-memory/in-memory-type-product-repository'
import { CreateTypeProductUseCase } from './create-type-product'
import { InMemorySizeProductRepository } from '@/infra/repositories/in-memory/in-memory-size-product-repository'

describe('Create type', () => {
    it('should be able to create type', async () => {
        const repository = new InMemoryTypeProductRepository()
        const repositorySize = new InMemorySizeProductRepository()
        const usecase = new CreateTypeProductUseCase(repository, repositorySize)

        const { typeProduct } = await usecase.execute({
            code: 'tv',
            name: 'television',
            sizes: {
                sizeList: [{ code: '55' }],
                unitOfMeasure: 'inches',
            },
        })

        expect(repository.types).length(1)

        expect(typeProduct.code).toBe('TV')
        expect(typeProduct.name).toBe('Television')

        expect(repositorySize.sizes).length(1)

        const size = repositorySize.sizes[0]
        expect(size.typeCode).toBe('TV')
        expect(size.code).toBe('55')
        expect(size.description).toBe('')
        expect(size.unitOfMeasure).toBe('Inches')
    })
})
