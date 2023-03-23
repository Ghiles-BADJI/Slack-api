import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { MessageDto } from "./dto/message.dto";
import { Message } from "./message.entity";
import { MessageService } from "./message.service";

@ApiTags('Message')
@Controller('message')
export class MessageController {

    constructor(private readonly messageService: MessageService) { }

    @Post()
    @ApiOkResponse({ type: Message })
    public async createMessage(@Body() body: MessageDto): Promise<Message> {
        return this.messageService.createMessage(body);
    }

    @Get(':directMessage')
    @ApiOkResponse({ type: Message })
    getMessageByDirect(@Param('directMessage', ParseIntPipe)directMessage: boolean): Promise<Message[]> {
        return this.messageService.getMessageByDirect(directMessage);
    }
}