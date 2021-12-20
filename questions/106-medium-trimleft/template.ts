type TrimLeft<S extends string> = any

type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer T}` ? TrimLeft<T>: S

type RRR = TrimLeft<'      ololo   '>


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<TrimLeft<'str'>, 'str'>>,
    Expect<Equal<TrimLeft<' str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
    Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
]

