import { JwtModule as Jwt } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'

export const JwtModule = Jwt.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    secret: configService.get<string>('JWT_SECRET'),
    signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES') }
  })
})
