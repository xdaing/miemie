import { DocumentBuilder } from '@nestjs/swagger'

export const swaggerConfig = new DocumentBuilder()
  .setTitle('咩咩')
  .setDescription('咩咩的接口文档')
  .setVersion('1.0')
  .build()

