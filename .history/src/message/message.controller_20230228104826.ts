import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Conversation } from "src/conversation/conversation.entity";
import { conversationDto } from "src/conversation/dto/conversation.dto";
import { MessageDto } from "./dto/message.dto";
import { Message } from "./message.entity";
import { MessageService } from "./message.service";

@ApiTags('Message')
@Controller('message')
export class MessageController {

    constructor(private readonly messageService: MessageService) { }

    @Post('message')
    @ApiOkResponse({ type: Message })
    public async createMessage(@Body() body: MessageDto): Promise<Message> {
        return this.messageService.createMessage(body.conversation, body.user, body.text);
    }
}