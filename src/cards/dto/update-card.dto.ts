import { CreateCardDto } from './create-card.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCardDto {
  id: number;
  
  name: string;

  date: number;

  description: string;
  
  image: string;
}
