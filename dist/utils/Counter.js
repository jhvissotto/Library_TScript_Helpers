export class Counter {
    initial;
    value;
    constructor({ initial = 0 }) {
        this.initial = initial;
        this.value = initial;
    }
    reset() { this.value = this.initial; }
    increment() { this.value += 1; }
    decrement() { this.value -= 1; }
    getValue() { return this.value; }
}
