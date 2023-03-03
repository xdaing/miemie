import { Injectable } from '@nestjs/common'
import { MailerOptionsFactory, MailerOptions } from '@nestjs-modules/mailer'
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter'
import { ConfigService } from '@nestjs/config'
import { join } from 'path'

@Injectable()
export class MailerConfigService implements MailerOptionsFactory {
  constructor(private readonly configService: ConfigService) {
  }

  createMailerOptions(): MailerOptions {
    return {
      transport: {
        host: this.configService.get('EMAIL_HOST'),
        port: this.configService.get('EMAIL_PORT'),
        auth: {
          user: this.configService.get('EMAIL_ACCOUNT'),
          pass: this.configService.get('EMAIL_PASSWORD')
        }
      },
      defaults: { // 默认配置项
        from: `咩咩<${this.configService.get('EMAIL_ACCOUNT')}>`,
        subject: '用户邮箱验证',
        template: 'mail.ejs'
      },
      template: {
        dir: join(process.cwd(), 'src/template'),
        adapter: new EjsAdapter()
      }
    }
  }
}