import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LotesService } from './lotes.service';
import { LotesController } from './lotes.controller';
import { LoteVainilla } from './entities/lote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoteVainilla])],
  controllers: [LotesController],
  providers: [LotesService],
})
export class LotesModule {}
