import { Body, Controller, Get, Post } from '@nestjs/common'
import { QuestionService } from './question.service'
import { Question } from '../schema/question.schema'
import { ApiBearerAuth, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger'

@ApiBearerAuth()
@ApiSecurity('basic')
@ApiTags('Question')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @ApiOperation({ summary: '질문 등록' })
  @Post()
  async createQuestion(@Body('content2') content2: string): Promise<Question> {
    return await this.questionService.createQuestion(content2)
  }

  @ApiOperation({ summary: '질문 보기' })
  @Get()
  async getAllQuestion(): Promise<Question[]> {
    return await this.questionService.getAllQuestion()
  }
}
