import { ApiProperty } from "@nestjs/swagger";

export class UserUpdateDto {

    @ApiProperty()
    id: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}