import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'card' })
export class Card{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @Column()
  image: string;

}