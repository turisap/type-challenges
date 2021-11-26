type Last<T extends any[]> = T extends [...infer All, infer R] ? R : never

type OLOLO = Last<['me', 'foo', 'bar']>
