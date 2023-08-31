import { Controller, Get, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { FileService } from './file.service'

@Controller('upload')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('post/:name')
  getPostImgByName(
    @Req() req: Request,
    @Res() res: Response
  ) {
    return this.fileService.post(req, res)
  }

  @Get('profile/:name')
  getProfileImgByName(
    @Req() req: Request,
    @Res() res: Response
  ) {
    return this.fileService.profile(req, res)
  }
}