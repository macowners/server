import { Module } from '@nestjs/common'
import { SignService } from './sign.service'
import { SignController } from './sign.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '../schema/user.schema'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from '../../util/secret.contants'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '3d' },
      }),
    }),
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
  controllers: [SignController],
  providers: [SignService],
})
export class SignModule {}
