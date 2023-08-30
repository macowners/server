import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsString } from 'class-validator'

export class UserDto {
  @ApiProperty({
    required: true,
    example: 'gildong',
    description: '아이디',
  })
  @IsString()
  readonly name: string

  @ApiProperty({
    required: true,
    example: 'qwer1234!',
    description: '비밀번호',
  })
  @IsString()
  readonly password: string

  @ApiProperty({
    required: true,
    example: '그룹이름',
    description: '그룹',
  })
  @IsArray()
  readonly group: string[]
}
