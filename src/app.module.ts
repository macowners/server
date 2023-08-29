import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose'
import { SignModule } from './sign/sign.module'
import { LoggingInterceptor } from './interceptor/logging.interceptor'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/sclife'), UserModule, SignModule],
  controllers: [AppController],
  providers: [AppService, LoggingInterceptor],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingInterceptor).forRoutes('*')
  }
}
