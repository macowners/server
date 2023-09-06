import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from '../schema/user.schema'
import { Model, Types } from 'mongoose'

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

  calculateStudySchedule_P(pageCount: number, remainingDays: number) {
    const daysPerPage = Math.ceil(pageCount / remainingDays) // 남은 일 수로 페이지를 분배

    return {
      daysPerPage,
    }
  }

  calculateStudySchedule_S(courseCount: number, remainingDays: number) {
    const daysPerCourse = Math.ceil(courseCount / remainingDays) // 남은 일 수로 강의를 분배

    return {
      daysPerCourse,
    }
  }
}
