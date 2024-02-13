import { Toy } from '../interfaces/toy';
import { Counter } from '../interfaces/counter';

export class BrokenPricy implements Counter {
    private threshold: number
    private total: number

    constructor(threshold?: number) {
        this.threshold = threshold || 10
        this.total = 0
    }

    count(toy: Toy): void {
        if (toy.broken && toy.price > this.threshold) this.total++
    }

    getCount(): number {
        return this.total
    }
}