import { ApiProperty } from "@nestjs/swagger";

export class conversationDto {

    @ApiProperty()
    participantIdList: string[];
}