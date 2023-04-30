import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'card' })
export class Card{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'professor_id'})
  professorId: number;

  @Column()
  name: string;

  @Column()
  date: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt?: Date;

}