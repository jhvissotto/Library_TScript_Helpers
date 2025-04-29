export function castToBool(x:undefined|null|boolean|number|string, coerce=false): boolean {

    if (['true','1','t','y','yes'].includes(String(x).toLowerCase())) return true
    if (['false','0','f','n','no'].includes(String(x).toLowerCase())) return false
    
    if (coerce) {
        if (['undefined','null','none','nan'].includes(String(x).toLowerCase())) return false
    }

    throw new Error('BOOLEAN_CASTING_FAILED')
}