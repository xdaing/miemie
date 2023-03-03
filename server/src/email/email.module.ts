import { Module } from '@nestjs/common'
import { MailerModule as Mailer } from '@nestjs-modules/mailer'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { EmailService } from './email.service'
import { EmailController } from './email.controller'
import { MailerConfigService } from './email.config.service'


const MailerModule = Mailer.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useClass: MailerConfigService
})

@Module({
  imports: [MailerModule],
  providers: [EmailService],
  exports: [EmailService],
  controllers: [EmailController]
})
export class EmailModule {
}
