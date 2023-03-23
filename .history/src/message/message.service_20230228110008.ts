import { InjectRepository } from "@nestjs/typeorm";
import { Conversation } from "src/conversation/conversation.entity";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { MessageDto } from "./dto/message.dto";
import { Message } from "./message.entity";

export class MessageService {

    constructor(@InjectRepository(Message)
    private messageRepository: Repository<Message>
    ) { }


    public async createMessage(body: MessageDto): Promise<Message> {
        const mess: Message = this.messageRepository.create({
            conversation: {id: body.conversationId},
            user: {id: body.userId},
            text: body.text 
        });
        return this.messageRepository.save(mess)
    }
}