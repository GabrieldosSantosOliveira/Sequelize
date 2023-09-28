import { Replace } from '@/helpers/utility-types/replace'

export interface UserProps {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}
export class User {
  private props: UserProps
  constructor({
    createdAt,
    updatedAt,
    ...props
  }: Replace<UserProps, { createdAt?: Date; updatedAt?: Date }>) {
    this.props = {
      createdAt: createdAt || new Date(),
      updatedAt: updatedAt || new Date(),
      ...props,
    }
  }

  public get id() {
    return this.props.id
  }

  public get name() {
    return this.props.name
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get createdAt() {
    return this.props.createdAt
  }

  public get updatedAt() {
    return this.props.updatedAt
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt
  }
}
