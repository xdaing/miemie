import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { EmailService } from './email.service'

@Controller('email')
@ApiTags('验证码')
export class EmailController {
  constructor(private readonly emailService: EmailService) {
  }
}
