import { Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Conversation } from "./conversation.entity";
import { ConversationService } from "./conversation.service";

@ApiTags('Conversation')
@Controller('conversation')
export class ConversationController {

    constructor(private readonly conversationService: ConversationService) { }

    @Post('')
    @ApiOkResponse({ type: Conversation })
    createConversation() {}
}