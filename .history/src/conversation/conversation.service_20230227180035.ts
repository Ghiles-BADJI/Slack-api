import { InjectRepository } from "@nestjs/typeorm";
import { Observable } from "rxjs";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { Conversation } from "./conversation.entity";

export class ConversationService {

    constructor(@InjectRepository(Conversation)
    private conversationRepository: Repository<Conversation>
    ) { }


    public async createConversation(participants: User[], messages: Message[]): Promise<Conversation> {
        const conv: Conversation = this.conversationRepository.create({
            participants, messages
        });
        return this.conversationRepository.save(conv)
    }
}