//  long
type Concat<T extends any[], U extends any[]> = T['length'] extends 0 ? U['length'] extends 0 ? [] : U : [...T, ...U]
// short
type Concat<T extends any[], U extends any[]> = [...T, ...U]

type TTT = Concat<[], [3]>
type RRR = Concat<[], [3,4,5]>
type FFF = Concat<[1,2,3], []>
type LLL = Concat<[1], []>
type SSS = Concat<[1,2], [3,4]>