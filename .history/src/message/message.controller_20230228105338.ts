import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
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
        return this.messageService.createMessage(body.id, body.user, body.text);
    }
}