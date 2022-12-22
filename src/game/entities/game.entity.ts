import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Deck } from './../../deck/entities/deck.entity';

@Entity({name: 'game'})
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @ManyToOne(() => Deck)
  deckId: Deck;
}
