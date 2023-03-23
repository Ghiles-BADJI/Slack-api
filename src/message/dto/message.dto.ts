import { ApiProperty } from "@nestjs/swagger";


export class MessageDto {

    @ApiProperty()
    conversationId: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    text: string;
}