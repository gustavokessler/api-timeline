import { CreateDeckDto } from './create-deck.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDeckDto {
  name: string;
  
  description: string;

  id: number
}
