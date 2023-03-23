import { ApiProperty } from "@nestjs/swagger";
import { Conversation } from "src/conversation/conversation.entity";
import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Message {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: string;

    @ApiProperty()
    @ManyToOne(() => Conversation)
    conversation: Conversation;

    @ApiProperty()
    @ManyToOne(() => User)
    user: User;

    @ApiProperty()
    @Column()
    text: string;

    @ApiProperty()
    @CreateDateColumn()
    createAt: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updateAt: Date;
}