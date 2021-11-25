type Primitive = number | string | boolean | bigint | symbol | undefined | null;
type Builtin = Primitive | Function | Date | Error | RegExp;

type DeepReadonly<T> = {
    readonly [Key in keyof T]: T[Key] extends Builtin ? T[Key]: DeepReadonly<T[Key]>
}
