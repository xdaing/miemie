import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import { AppModule } from '@/app.module'
import { swaggerConfig } from '@/swagger/swagger.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  SwaggerModule.setup('doc', app, SwaggerModule.createDocument(app, swaggerConfig))
  await app.listen(3000)
}

bootstrap()
