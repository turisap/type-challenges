type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [O in K]: T[O]
} & Omit<T,K>
