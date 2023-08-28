import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from '../dto/user.dto'
import { Types } from 'mongoose'
import { ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserDto,
  })
  @ApiResponse({
    status: 401,
    description: '서버 에러',
  })
  @Get()
  getUserAll() {
    return this.userService.findAll()
  }

  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserDto,
  })
  @ApiResponse({
    status: 401,
    description: '서버 에러',
  })
  @Post()
  getUserById(@Body() _id: Types.ObjectId) {
    return this.userService.findById(_id)
  }
}
