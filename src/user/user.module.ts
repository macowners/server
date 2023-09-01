import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '../schema/user.schema'
import { UserController } from './user.controller'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/profile',
        filename: (_, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`)
        },
      }),
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
