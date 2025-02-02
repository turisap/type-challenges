type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer A) =>  any ? A: never


/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: {a: 'A'}): void => {}
const baz = (): void => {}

type cases = [
    Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
    Expect<Equal<MyParameters<typeof bar>, [boolean, {a: 'A'}]>>,
    Expect<Equal<MyParameters<typeof baz>, []>>,
]
