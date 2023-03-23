import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/message/message.entity';
import { User } from 'src/user/user.entity';
import { ConversationController } from './conversation.controller';
import { Conversation } from './conversation.entity';
import { ConversationService } from './conversation.service';


@Module({
  imports: [TypeOrmModule.forFeature([Conversation, User, Message])],
  controllers: [ConversationController],
  providers: [ConversationService],
  exports: [ConversationService]
})
export class ConversationModule { }
