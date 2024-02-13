import { Toy } from '../interfaces/toy';
import { Counter } from '../interfaces/counter';

export class Color implements Counter {
    private total: Record<string, number> = {}

    count(toy: Toy): void {
        this.total[toy.color] = (this.total[toy.color] || 0) + 1
    }

    getCount(): Record<string, number> {
        return this.total
    }
}