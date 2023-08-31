import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsString } from 'class-validator'

export class CommentDto {
  @ApiProperty({
    required: true,
    example: '안녕하세요',
    description: '내용'
  })
  @IsString()
  readonly content: string

  @ApiProperty({
    required: true,
    example: '안녕하세요',
    description: '제목'
  })
  @IsString()
  readonly postTitle: string

  @ApiProperty({
    required: true,
    example: '안녕하세요',
    description: '게시물 내용'
  })
  @IsString()
  readonly postContent: string

  @IsDateString()
  readonly createdAt: Date

  @IsDateString()
  readonly updatedAt: Date
}