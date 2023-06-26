import { Replace } from '@/helpers/utility-types/replace'
import { randomUUID } from 'node:crypto'

export interface StudentProps {
  id: string
  name: string
  dateOfBirth: Date
  createdAt: Date
  updatedAt: Date
}
export class Student {
  private props: StudentProps
  constructor({
    id,
    createdAt,
    updatedAt,
    ...props
  }: Replace<
    StudentProps,
    { createdAt?: Date; updatedAt?: Date; id?: string }
  >) {
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

  public get dateOfBirth() {
    return this.props.dateOfBirth
  }

  public set dateOfBirth(dateOfBirth: Date) {
    this.props.dateOfBirth = dateOfBirth
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
