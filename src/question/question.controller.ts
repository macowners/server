import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { QuestionService } from './question.service'
import { Question } from '../schema/question.schema'
import { ApiBearerAuth, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { FileInterceptor } from '@nestjs/platform-express'
import { QuestionDto } from '../dto/question.dto'

@ApiBearerAuth()
@ApiSecurity('basic')
@ApiTags('Question')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @ApiOperation({ summary: '질문 등록' })
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  createQuestion(@UploadedFile() file: Array<Express.Multer.File>, @Body() body: QuestionDto): Promise<Question> {
    return this.questionService.create({ ...body, img: JSON.parse(JSON.stringify(file)).filename })
  }

  @ApiOperation({ summary: '질문 보기' })
  @Get()
  getAllQuestion(): Promise<Question[]> {
    return this.questionService.getAll()
  }
}
