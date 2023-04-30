import { IsISO8601 } from "@nestjs/class-validator";

export class CreateCardDto {

  professorId: number;

  name: string;

  date: number;

  description: string;
  
  image: string;
}
