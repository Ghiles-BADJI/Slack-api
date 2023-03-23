import { ApiProperty } from "@nestjs/swagger";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";

export class conversationDto {

    @ApiProperty()
    id: string;

    @ApiProperty()
    participants: User[];

    @ApiProperty()
    messages: Message[]
}