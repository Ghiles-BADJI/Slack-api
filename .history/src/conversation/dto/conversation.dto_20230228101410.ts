import { ApiProperty } from "@nestjs/swagger";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";

export class conversationDto {

    @ApiProperty({
        enum: User,
        enumName: 'User',
        isArray: true,
    })
    participants: User[];

    @ApiProperty({
        enum: Message,
        enumName: 'Message',
        isArray: true,
    })
    messages: Message[]
}