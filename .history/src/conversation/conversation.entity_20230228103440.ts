import { ApiProperty } from "@nestjs/swagger";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conversation {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: string;

    //@ApiProperty({ type: () => User, isArray: true })
    @ManyToMany(() => User)
    @JoinTable()
    participants: User[];

    //@ApiProperty({ type: () => Message, isArray: true })
    @OneToMany(() => Message, 'conversationId')
    messages: Message[];
}