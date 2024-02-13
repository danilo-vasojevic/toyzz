import { Toy } from '../interfaces/toy';
import { Counter } from '../interfaces/counter';

export class Sum implements Counter {
    private total = 0

    count(toy: Toy): void {
        this.total += toy.price
    }

    getCount(): number {
        return Math.round(this.total * 100) / 100
    }
}