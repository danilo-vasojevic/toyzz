import * as fs from 'fs'
import * as csv from 'fast-csv'
import { Toy } from './interfaces/toy'
import { StatsCalculator } from './statsCounter'
import { Total } from './stats/total'
import { Color } from './stats/color'
import { BrokenPricy } from './stats/price'
import { Blue } from './stats/blue'
import { Sum } from './stats/sum'

function processCsvFile(filePath: string) {
    const counter = new StatsCalculator([
        new Total(),
        new Color(),
        new BrokenPricy(),
        new Blue(),
        new Sum()
    ])
    
    fs.createReadStream(filePath)
        .pipe(csv.parse({ headers: true }))
        .transform((row: any): Toy => ({
            name: row.name,
            color: row.color,
            broken: row.broken == "true",
            price: parseFloat(row.price)
        }),)
        .on('data', (toy: Toy) => counter.consume(toy))
        .on('end', () => console.log(counter.getStats()))
}
processCsvFile('./toys.csv')