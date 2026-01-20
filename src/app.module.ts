import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LlmModule } from './llm/llm.module';

@Module({
  imports: [CatsModule, LlmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
