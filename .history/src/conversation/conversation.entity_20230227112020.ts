import { ApiProperty } from "@nestjs/swagger";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conversation {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    participant: User[];

    @ApiProperty()
    @Column()
    sender: User;

    @ApiProperty()
    @Column()
    message: Message;

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

    @ApiProperty({ type: () => Conversation, isArray: true })
    @ManyToMany(() => Conversation)
    @JoinTable()
    friends: Conversation[];

}