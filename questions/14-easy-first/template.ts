type First<T extends any[]> =  T['length'] extends 0 ? never : T[0]

type Second<T extends any[]> = T extends [infer A, infer B, ...infer C] ? B : never

type UUUU = First<[undefined]>
type LLLL = First<[]>
type OOO = First<[3,4,5]>
type SSS = Second<[4,5,6]>