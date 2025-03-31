# 1) Utilities


### bool

```Typescript
import { bool } from 'tscript-helpers/utils'

bool([]) == true
bool({}) == true
```


### Counter

```Typescript
import { Counter } from 'tscript-helpers/utils'

const { getValue, increment, decrement, reset } = new Counter({ initial:0 })
```


### Paginator

```Typescript
import { Paginator } from 'tscript-helpers/utils'

const { pagination } = Paginator()

const feat = TRPC.procedure.input(zod.object({ 
    cursor: zod.number().default(pagination.initialPage), // 1) initialPage 
})).query(async ({ input }) => {
    
    const data = await prismaClient.table.query({ 
        ...pagination.calcPrisma(input.limit, input.cursor),  // 2) calcPrisma
    })
    
    return { data, ...pagination.calcTRPC(data.length, input.limit, input.cursor) } // 3) calcTPRC
})
```



# 2) Hooks

### useCounter

```Typescript
import { useCounter } from 'tscript-helpers/hooks'

const { value, setValue, reset, increment, decrement } = useCounter({ initial: 0 })
```


### usePersistedState

```Typescript
import { usePersistedState } from 'tscript-helpers/hooks'

const { data, isLoading } = TRPCNext.feature.useQuery()

const [ data2, __ ] = usePersistedState(data, [])
```