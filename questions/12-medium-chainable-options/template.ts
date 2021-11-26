
type Chainable<O = {}> = {
    option<T extends string, U>(key: T, value: U): Chainable<O & { [K in T]: U }>;
    get(): O;
};

/* _____________ Test Cases _____________ */
import { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

type FFF<T extends string, U> = { [K in T] : U}

type OO = FFF<'ddd', number>

const result = a
    .option('foo', 123)
    .option('bar', { value: 'Hello World' })
    .option('name', 'type-challenges')
    .get()

type R = typeof result

type cases = [
    Expect<Alike<typeof result, Expected>>
]

type Expected = {
    foo: number
    bar: {
        value: string
    }
    name: string
