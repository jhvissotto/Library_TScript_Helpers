# Utilities

### bool
```ts
import { bool } from 'tscript-helpers/utils'

bool([]) == true
bool({}) == true
```


### Compact
```ts
import { compact } from 'tscript-helpers/utils'

compact(-10)  // -10
compact(100)  // 100

compact(1000) //   1K
compact(1025) //   1K
compact(1075) // 1.1K
compact(1250) // 1.3K
compact(1500) // 1.5K

compact(10_000)  //  10K
compact(123_000) // 120K
compact(125_000) // 130K
```


### Counter
```ts
import { Counter } from 'tscript-helpers/utils'

const { getValue, increment, decrement, reset } = new Counter({ initial:0 })
```


### Paginator
```ts
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


### Optional Call
```ts
import { optional_call } from 'tscript-helpers/utils'

let pipe
pipe = optional_call(pipe, 'modifier', arg)       // pipe = pipe.modifier(arg)
pipe = optional_call(pipe, 'modifier', undefined) // pipe = pipe
```



# SQL Queries

### SELECT
```ts
import { SELECT } from 'tscript-helpers/SQL'

const QUERY = SELECT(['*'], 'Table', { where:'ColA = 123', orderby:['RAND()'], limit:10, offset:10 })

console.log('>> QUERY:', QUERY)
```
```
>> QUERY:
SELECT *
FROM Table
WHERE ColA = 123
ORDER BY RAND()
LIMIT 10
OFFSET 10
```



# Hooks

### useCounter
```ts
import { useCounter } from 'tscript-helpers/hooks'

const { value, setValue, reset, increment, decrement } = useCounter({ initial: 0 })
```


### usePersistedState
```ts
import { usePersistedState } from 'tscript-helpers/hooks'

const { data, isLoading } = TRPCNext.feature.useQuery()

const [ data2, __ ] = usePersistedState(data, [])
```



# JSX

### If
```jsx
import { If } from 'tscript-helpers/JSX'

const Component = () => (
    <>
        <If cond={true} > <p>Render</p>   </If>
        <If cond={false}> <p>Disabled</p> </If>
    </>
)
```