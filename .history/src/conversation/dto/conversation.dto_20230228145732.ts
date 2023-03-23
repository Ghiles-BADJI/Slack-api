import { ApiProperty } from "@nestjs/swagger";
import { Message } from "src/message/message.entity";

export class conversationDto {

    @ApiProperty()
    participantIdList: string[];

    @ApiProperty()
    messageList: Message[];
}