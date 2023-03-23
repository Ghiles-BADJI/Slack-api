import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Conversation } from "./conversation.entity";
import { ConversationService } from "./conversation.service";
import { conversationDto } from "./dto/conversation.dto";

@ApiTags('Conversation')
@Controller('conversation')
export class ConversationController {

    constructor(private readonly conversationService: ConversationService) { }

    @Post('')
    @ApiOkResponse({ type: Conversation })
    async createConversation(@Body() body: conversationDto): Promise<Conversation> {
        return this.conversationService.createConversation(body.participants, body.messages);
    }
}