import { ApiProperty } from "@nestjs/swagger";
import { Conversation } from "src/conversation/conversation.entity";
import { User } from "src/user/user.entity";

export class MessageDto {

    @ApiProperty()
    id: string;

    @ApiProperty()
    user: User;

    @ApiProperty()
    text: string;
}