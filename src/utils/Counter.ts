export class Counter {

    private initial: number
    private value:   number
  
    constructor({ initial = 0 }) {
        this.initial = initial
        this.value   = initial
    }
  
    reset()     { this.value  = this.initial }
    increment() { this.value += 1            }
    decrement() { this.value -= 1            }

    getValue()  { return this.value }
}