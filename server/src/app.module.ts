import { Module } from '@nestjs/common'
import { ConfigModule } from '@/config/config.module'
import { DbModule } from '@/db/db.module'
import { RedisModule } from '@/redis/redis.module'
import { UserModule } from '@/user/user.module'


@Module({
  imports: [ConfigModule, DbModule, RedisModule, UserModule]
})
export class AppModule {
}
