import { ApiProperty } from "@nestjs/swagger";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conversation {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: string;

    @ApiProperty()
    @ManyToMany(() => User)
    @JoinTable()
    participants: User[];

    @ApiProperty()
    @Column()
    sender: User;

    @ApiProperty()
    @Column()
    message: Message;
}