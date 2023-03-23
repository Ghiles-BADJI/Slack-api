import { ApiProperty } from "@nestjs/swagger";
import { Conversation } from "src/conversation/conversation.entity";
import { User } from "src/user/user.entity";

export class MessageDto {

    @ApiProperty({
        enum: Conversation,
        enumName: 'Conversation',
        isArray: true,
    })
    conversation: Conversation;

    @ApiProperty({
        enum: User,
        enumName: 'User',
        isArray: true,
    })
    user: User;

    @ApiProperty()
    text: string;
}