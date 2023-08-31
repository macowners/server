import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsString } from 'class-validator'

export class QuestionDto {
  @ApiProperty({
    required: true,
    example: '안녕하세요',
    description: '내용'
  })
  @IsString()
  readonly content2: string

  @ApiProperty({
    example: '20230101',
    description: '생성 날짜'
  })
  @IsDateString()
  readonly createdAt: Date
}