import { ApiProperty } from "@nestjs/swagger";
import { Conversation } from "src/conversation/conversation.entity";
import { User } from "src/user/user.entity";

export class MessageDto {

    @ApiProperty()
    conversationId: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    text: string;

    @ApiProperty()
    directMessage: boolean;
}