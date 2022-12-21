import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { Card } from "src/cards/entities/card.entity";

@Entity({name: 'deck'})
export class Deck {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({name: "professor_id"})
  professorId: number

  @Column()
  description: string;

  @ManyToMany(()=> Card)
  @JoinTable({
    name: 'card_has_deck',
    joinColumn: {name: 'deck_id', referencedColumnName: 'id'},
    inverseJoinColumn: {name: 'card_id', referencedColumnName: 'id'}
  })
  cards: Card[]

}
@Entity({name: 'card_has_deck'})
export class DeckCards {
  @PrimaryColumn({name: 'card_id'})
  cardId: number

  @PrimaryColumn({name: 'deck_id'})
  deckId: number
}
