import { PartialType } from '@nestjs/mapped-types';
import { CreateReportesCalidadDto } from './create-reportes-calidad.dto';

export class UpdateReportesCalidadDto extends PartialType(CreateReportesCalidadDto) {}
