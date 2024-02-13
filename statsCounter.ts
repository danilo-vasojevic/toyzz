import { Counter } from './interfaces/counter'
import { Toy } from './interfaces/toy'

export class StatsCalculator {
    private counters: Counter[] = []
    
    constructor(counters: Counter[]) {
        for (const counter of counters) this.counters.push(counter)
    }

    consume(toy: Toy) {
        for (const counter of this.counters) counter.count(toy)
    }

    getStats() {
        const result = {}
        for (const counter of this.counters) {
            result[counter.constructor.name.toLowerCase()] = counter.getCount()
        }
        return result
    }
}