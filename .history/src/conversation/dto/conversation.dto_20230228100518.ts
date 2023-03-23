import { ApiProperty } from "@nestjs/swagger";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";

export class conversationDto {

    @ApiProperty({enum: User})
    public participants: User[];

    @ApiProperty({enum: Message})
    public messages: Message[]
}