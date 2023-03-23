import { ApiProperty } from "@nestjs/swagger";
import { Conversation } from "src/conversation/conversation.entity";
import { User } from "src/user/user.entity";

export class MessageDto {

    @ApiProperty({type: Conversation})
    conversation: Conversation;

    @ApiProperty({type: User})
    user: User;

    @ApiProperty()
    text: string;
}