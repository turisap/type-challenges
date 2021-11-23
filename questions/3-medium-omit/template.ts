type MyOmit<T, K> = {
    [O in keyof T as O extends K ? never : O]: T[O]
}
