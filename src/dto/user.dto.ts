import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNumber, IsString } from 'class-validator'

export class UserDto {
  @ApiProperty({
    example: 'default.jpg',
    description: '프로필 이미지'
  })
  @IsString()
  readonly img: string

  @ApiProperty({
    required: true,
    example: 'gildong',
    description: '아이디',
  })
  @IsString()
  readonly name: string

  @ApiProperty({
    required: true,
    example: 'asdf@gmail.com',
    description: '이메일'
  })
  @IsString()
  readonly email: string

  @ApiProperty({
    required: true,
    example: 'qwer1234!',
    description: '비밀번호',
  })
  @IsString()
  readonly password: string

  @ApiProperty({
    example: '그룹이름',
    description: '그룹',
  })
  @IsArray()
  readonly group: string[]

  @ApiProperty({
    example: '97',
    description: '상담, 진담 점수'
  })
  @IsNumber()
  readonly score: number
}
