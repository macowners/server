import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api')
  const config = new DocumentBuilder() //
    .setTitle('API')
    .setDescription('개발을 위한 API 문서입니다.')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build()
  const document = SwaggerModule.createDocument(app, config) //
  SwaggerModule.setup('api', app, document) //

  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
  console.log(`Listening on port ${3000}`)
}
bootstrap()
