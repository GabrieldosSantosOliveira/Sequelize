import { Replace } from '@/helpers/utility-types/replace'
import { randomUUID } from 'node:crypto'

import { Company } from './company'

export interface UserProps {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  company: Company
}
export class User {
  private props: UserProps
  constructor({
    id,
    createdAt,
    updatedAt,
    ...props
  }: Replace<UserProps, { createdAt?: Date; updatedAt?: Date; id?: string }>) {
    this.props = {
      id: id || randomUUID(),
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

  public get company() {
    return this.props.company
  }

  public get updatedAt() {
    return this.props.updatedAt
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt
  }
}
