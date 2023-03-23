import { ApiProperty } from "@nestjs/swagger";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";

export class conversationDto {

    @ApiProperty({type: [User]})
    public participants: User[];

    @ApiProperty({type: [Message]})
    public messages: Message[]
}