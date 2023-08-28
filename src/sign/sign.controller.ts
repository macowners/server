import { Body, Controller, Delete, Post } from '@nestjs/common'
import { UserDto } from '../dto/user.dto'
import { SignService } from './sign.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Sign')
@Controller('sign')
export class SignController {
  constructor(private readonly signService: SignService) {}

  @ApiResponse({
    status: 200,
    description: '성공',
    type: UserDto,
  })
  @ApiResponse({
    status: 401,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '회원가입' })
  @Post('up')
  signUp(@Body() body: UserDto) {
    return this.signService.sign_up(body)
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
  @ApiOperation({ summary: '로그인' })
  @Post('in')
  signIn(@Body() body: UserDto) {
    return this.signService.sign_in(body)
  }

  // 로그아웃기능구현
}
