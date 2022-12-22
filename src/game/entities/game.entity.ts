import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Deck } from './../../deck/entities/deck.entity';

@Entity({name: 'game'})
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @OneToOne(() => Deck)
  @JoinColumn({name: 'deck_id'})
  deck: Deck;

  @Column({name: 'professor_id'})
  professorId: number
}
