import { useState } from 'react'


export function useCounter({ initial = 0 }) {

    const [value, setValue] = useState(initial)

    function reset()     { setValue(initial)       }
    function increment() { setValue(val => val +1) }
    function decrement() { setValue(val => val -1) }

    return { value, setValue, reset, increment, decrement }
}