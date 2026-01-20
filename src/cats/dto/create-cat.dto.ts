import { IsInt, IsString, Min } from 'class-validator';
import { type Cat } from '../interfaces/cat.interface';

// DTO used for incoming cat creation requests with validation.
export class CreateCatDto implements Cat {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsString()
  breed: string;
}
