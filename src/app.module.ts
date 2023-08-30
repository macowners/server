import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose'
import { SignModule } from './sign/sign.module'
import { HealthModule } from './health/health.module'
import { LoggerMiddleware } from './middlewares/logger.middlware'
import { JwtAuthGuard } from './guard/AuthGuard'
import { CommentsModule } from './comments/comments.module'
import { QuestionModule } from './question/question.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/sclife'), UserModule, SignModule, HealthModule, CommentsModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService, LoggerMiddleware, JwtAuthGuard],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
