import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../schema/user.schema'
import { Model, Schema, Types } from 'mongoose'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async findById(_id: Types.ObjectId) {
    return this.userModel.findById(_id).exec()
  }

  async profile(_id: Types.ObjectId, img: string) {
    return this.userModel.findByIdAndUpdate(_id, { img }).exec()
  }
}
