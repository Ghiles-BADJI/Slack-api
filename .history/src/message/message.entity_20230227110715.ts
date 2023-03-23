import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ unique: true })
    email: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @Column({ nullable: true })
    lastName: string | null;

    @ApiProperty()
    @Column({ nullable: true })
    firstName: string | null;

    @ApiProperty()
    @Column({ nullable: true })
    dateOfBirth: Date | null;

    @ApiProperty({ required: false })
    @Column({ nullable: true })
    photoUrl: string | null;

    @ApiProperty({ type: () => Message, isArray: true })
    @ManyToMany(() => Message)
    @JoinTable()
    friends: Message[];

}