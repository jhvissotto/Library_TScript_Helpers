import { useEffect, useState } from 'react'


export function usePersistedState<S>(state1:S, initial:S) {
    
    const [state2, setState2] = useState(initial)
    
    useEffect(() => {
        if (state1) setState2(state1)
    }, [state1])

    return [state2, setState2]
}