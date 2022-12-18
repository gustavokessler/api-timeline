import { IsISO8601 } from "@nestjs/class-validator";

export class CreateCardDto {
  name: string;

  @IsISO8601()
  date: string;

  description: string;
  
  image: string;
}
