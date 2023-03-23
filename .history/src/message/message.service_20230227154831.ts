import { InjectRepository } from "@nestjs/typeorm";
import { Conversation } from "src/conversation/conversation.entity";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { Message } from "./message.entity";

export class MessageService {

    constructor(@InjectRepository(Message)
    private messageRepository: Repository<Message>
    ) { }


    createMessage(conversation: Conversation, user: User, text: string): Promise<Message> {
        const mess: Message = this.messageRepository.create({
            conversation, user, text, 
        });
        return this.messageRepository.save(mess)
    }
}