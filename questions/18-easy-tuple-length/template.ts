type Length<T extends readonly any[]> = T extends readonly any[]  ? T['length'] : never

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type TTT = Length<typeof tesla>
type RRR = Length<'hello'>
type FFF = Length<5>
type OOO = Length<{}>

type TESTY<L extends any> = L extends readonly any[] ? 'TRUE' : 'FALSE'

const arr = [3,4] as const
type M = TESTY<typeof arr>
type S = TESTY<'sdjf'>

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const