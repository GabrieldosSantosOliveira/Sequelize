export class Left<L, R> {
  constructor(public readonly value: L) {}
  public isLeft(): this is Left<L, R> {
    return true
  }

  public isRight(): this is Right<L, R> {
    return false
  }
}
export class Right<L, R> {
  constructor(public readonly value: R) {}
  public isRight(): this is Right<L, R> {
    return true
  }

  public isLeft(): this is Left<L, R> {
    return false
  }
}
export const left = <L, R>(l: L): Left<L, R> => {
  return new Left(l)
}
export const right = <L, R>(r: R): Right<L, R> => {
  return new Right(r)
}
export type Either<L, R> = Left<L, R> | Right<L, R>
