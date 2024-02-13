import { Counter } from '../interfaces/counter';

export class Total implements Counter {
    private total = 0

    count(): void {
        this.total++
    }
    getCount(): number {
        return this.total
    }
}