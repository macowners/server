import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose'
import { SignModule } from './sign/sign.module'
import { HealthModule } from './health/health.module'
import { LoggerMiddleware } from './middlewares/logger.middlware'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/sclife'), UserModule, SignModule, HealthModule],
  controllers: [AppController],
  providers: [AppService, LoggerMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
