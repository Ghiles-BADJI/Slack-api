import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Message {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    user: User;

    @ApiProperty()
    @Column({ unique: true })
    text: string;

    @ApiProperty()
    @CreateDateColumn()
    createAt: Date;

    @ApiProperty()
    @UpdateDateColumn({ nullable: true })
    updateAt: Date;
}