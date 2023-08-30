import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose'
import { SignModule } from './sign/sign.module'
import { HealthModule } from './health/health.module'
import { LoggerMiddleware } from './middlewares/logger.middlware'
import { JwtAuthGuard } from './guard/AuthGuard'
import { CommentController } from './comment/comment.controller'
import { CommentService } from './comment/comment.service'
import { CommentModule } from './comment/comment.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/sclife'), UserModule, SignModule, HealthModule, CommentModule],
  controllers: [AppController, CommentController],
  providers: [AppService, LoggerMiddleware, JwtAuthGuard, CommentService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
