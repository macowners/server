import { Body, Controller, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from '../dto/user.dto'
import { Types } from 'mongoose'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { FileInterceptor } from '@nestjs/platform-express'

@ApiBearerAuth()
@ApiSecurity('basic')
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
  @ApiOperation({ summary: '유저' })
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
  @ApiOperation({ summary: '유저' })
  @Post()
  getUserById(@Body() _id: Types.ObjectId) {
    return this.userService.findById(_id)
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
  @UseInterceptors(FileInterceptor('file'))
@Patch('profile')
  uploadUserProfile(
    @UploadedFile() file: Array<Express.Multer.File>,
    @Body('id') _id: Types.ObjectId
  ) {
    return this.userService.profile(_id, JSON.parse(JSON.stringify(file)).filename)
  }
}