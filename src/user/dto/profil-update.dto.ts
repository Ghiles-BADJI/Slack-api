import { ApiProperty } from "@nestjs/swagger";

export class ProfilUpdateDto {

    @ApiProperty()
    id: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    dateOfBirth: Date;
}