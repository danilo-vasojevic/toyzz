import { Toy } from './toy'

export interface Counter {
    count(toy: Toy): void
    getCount(): any
}