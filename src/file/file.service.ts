import { Injectable } from '@nestjs/common'
import { Request, Response } from 'express'
import { join } from 'path'

@Injectable()
export class FileService {
  async post(req: Request, res: Response) {
    const name = req.params.name
    return res.sendFile(join(process.cwd(), `uploads/post/${name}`))
  }

  async profile(req: Request, res: Response) {
    const name = req.params.name
    return res.sendFile(join(process.cwd(), `uploads/profile/${name}`))
  }
}
