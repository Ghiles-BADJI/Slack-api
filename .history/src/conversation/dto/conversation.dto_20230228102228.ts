import { ApiProperty } from "@nestjs/swagger";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";

export class conversationDto {

    @ApiProperty({ type: () => User, isArray: true })
    participants: User[];

    @ApiProperty({ type: () => Message, isArray: true })
    messages: Message[]
}