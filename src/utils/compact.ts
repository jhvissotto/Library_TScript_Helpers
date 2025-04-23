export function compact(x:number) {

    if (Number.isFinite(x)) {
        
        const [val, exp] = x.toExponential(1).split('e')
        
        if (exp == '+3')   return val.replace('.0', '') + 'K'
        if (exp == '+4')   return val.replace('.',  '') + 'K'
        if (exp == '+5')   return val.replace('.',  '') + '0K'
    
        if (exp == '+6')   return val.replace('.0', '') + 'M'
        if (exp == '+7')   return val.replace('.',  '') + 'M'
        if (exp == '+8')   return val.replace('.',  '') + '0M'
    
        if (exp ==  '+9')  return val.replace('.0', '') + 'B'
        if (exp == '+10')  return val.replace('.',  '') + 'B'
        if (exp == '+11')  return val.replace('.',  '') + '0B'
    
        if (exp == '+12')  return val.replace('.0', '') + 'T'
        if (exp == '+13')  return val.replace('.',  '') + 'T'
        if (exp == '+14')  return val.replace('.',  '') + '0T'
    }

    return String(x)
}