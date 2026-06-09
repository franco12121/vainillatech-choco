import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { EstadoInspeccion } from '../entities/lote.entity';

export class CreateLoteDto {
  @IsString()
  @IsNotEmpty()
  codigoLote: string;

  @IsDateString()
  fechaCosecha: string;

  @IsNumber()
  pesoGramos: number;

  @IsEnum(EstadoInspeccion)
  @IsOptional()
  estadoInspeccion?: EstadoInspeccion;
}
