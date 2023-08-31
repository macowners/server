import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsString } from 'class-validator'

export class CommentDto {
  @ApiProperty({
    required: true,
    example: '',
    description: '내용'
  })
  @IsString()
  readonly post_id: string

  @ApiProperty({
    required: true,
    example: '안녕하세요',
    description: '내용'
  })
  @IsString()
  readonly content: string

  @IsDateString()
  readonly createdAt: Date

  @IsDateString()
  readonly updatedAt: Date
}