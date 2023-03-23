import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Message {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: string;

    @ApiProperty()
    @Column()
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