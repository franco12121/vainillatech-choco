import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export enum ResultadoCalidad {
  OK = 'OK',
  NOK = 'NOK',
}

export class CreateReportesCalidadDto {
  @IsDateString()
  @IsOptional()
  fechaInspeccion?: string;

  @IsEnum(ResultadoCalidad)
  @IsNotEmpty()
  resultado: ResultadoCalidad;

  @IsString()
  color: string;

  @IsNumber()
  tamañoPromedioCm: number;

  @IsOptional()
  loteVainillaId?: string;

  @IsOptional()
  usuarioId?: string;
}
