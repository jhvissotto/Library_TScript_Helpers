export function toBool(x:undefined|null|boolean|number|string, props:{ extend:boolean }) {

    if (['true','1','t','y','yes'].includes(String(x).toLowerCase())) return true
    if (['false','0','f','n','no'].includes(String(x).toLowerCase())) return false
    
    if (props.extend) {
        if (['undefined','null','none','nan',''].includes(String(x).toLowerCase())) return false
    }

    throw new Error('BOOLEAN_CASTING_FAILED')
}


export function asBool(x:undefined|null|boolean|number|string, props:{ extend:boolean, undefine:boolean }) {

    if (['true','1','t','y','yes'].includes(String(x).toLowerCase())) return true
    if (['false','0','f','n','no'].includes(String(x).toLowerCase())) return false
    
    if (props.extend) {
        if (['undefined','null','none','nan',''].includes(String(x).toLowerCase())) return false
    }

    if (props.undefine) {
        return undefined
    }

    throw new Error('BOOLEAN_CASTING_FAILED')
}