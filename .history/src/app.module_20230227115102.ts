import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      autoLoadEntities: true,
      synchronize: true,
      url: process.env.DATABASE_URL
    }),
    UserModule, MessageModule, ConversationModule],
  providers: [AppService],
})
export class AppModule {}
