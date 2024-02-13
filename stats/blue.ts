import { Toy } from '../interfaces/toy';
import { Counter } from '../interfaces/counter';

export class Blue implements Counter {
    private total = 0

    count(toy: Toy): void {
        if(toy.color == 'blue') this.total++
    }

    getCount(): number {
        return this.total
    }
}