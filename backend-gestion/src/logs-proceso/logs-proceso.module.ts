import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsProcesoService } from './logs-proceso.service';
import { LogsProcesoController } from './logs-proceso.controller';
import { LogProceso } from './entities/log-proceso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogProceso])],
  controllers: [LogsProcesoController],
  providers: [LogsProcesoService],
})
export class LogsProcesoModule {}
