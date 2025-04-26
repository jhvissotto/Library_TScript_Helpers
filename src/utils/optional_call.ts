export function optional_call<
    Pipe, Arg, Func extends keyof Pipe
>(
    pipe: Pipe, 
    func: Func, 
    arg?: Arg 

): Pipe | (Pipe[Func] extends ((arg:Arg)=>any) ? ReturnType<Pipe[Func]> : never) {

    return arg
        ? (pipe[func] as ((arg:Arg)=>any)).call(pipe, arg)
        :  pipe
}