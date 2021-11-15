type MyPick<T, K> = {
    [Entry in keyof T as Entry extends K ? Entry : never]:  T[Entry]
}
