import type { PropsWithChildren } from 'react'

export function If({ cond, children }: PropsWithChildren<{ cond:boolean }>) {
    return cond ? children : null
}