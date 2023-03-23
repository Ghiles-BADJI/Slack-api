import { InjectRepository } from "@nestjs/typeorm";
import { Observable } from "rxjs";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { Conversation } from "./conversation.entity";
import { conversationDto } from "./dto/conversation.dto";

export class ConversationService {

    constructor(@InjectRepository(Conversation)
    private conversationRepository: Repository<Conversation>
    ) { }


    public async createConversation(body: conversationDto): Promise<Conversation> {
        const conv: Conversation = this.conversationRepository.create({
            name: body.name,
            directMessage: body.directMessage,
            participants: body.participantIdList.map((participantId: string) => ({
                id: participantId
            })),
            
        });
        return this.conversationRepository.save(conv)
    }

    getAllConversations(): Promise<Conversation[]> {
        return this.conversationRepository.find();
    }
}