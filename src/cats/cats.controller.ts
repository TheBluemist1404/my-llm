import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { type Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto): void {
    this.catsService.create(createCatDto);
  }


  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
