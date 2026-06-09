import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportesCalidadService } from './reportes-calidad.service';
import { ReportesCalidadController } from './reportes-calidad.controller';
import { ReporteCalidad } from './entities/reporte-calidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReporteCalidad])],
  controllers: [ReportesCalidadController],
  providers: [ReportesCalidadService],
})
export class ReportesCalidadModule {}
