import { User } from '@/app/entities'

import { UserDto } from '../dtos/UserDto'
import { UserModel } from '../models/user'

export class SequelizeUserMapper {
  static toDomain(userModel: UserModel): User {
    return new User({
      id: userModel.id,
      name: userModel.nome,
      createdAt: userModel.createdAt,
      updatedAt: userModel.updatedAt,
    })
  }

  static toSequelize(user: User): UserDto {
    return {
      createdAt: user.createdAt,
      id: user.id,
      nome: user.name,
      updatedAt: user.updatedAt,
    }
  }
}
