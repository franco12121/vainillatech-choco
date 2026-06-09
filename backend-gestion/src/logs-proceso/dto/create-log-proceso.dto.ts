import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { EtapaProceso } from '../entities/log-proceso.entity';

export class CreateLogProcesoDto {
  @IsEnum(EtapaProceso)
  @IsNotEmpty()
  etapa: EtapaProceso;

  @IsNumber()
  @IsOptional()
  temperaturaRegistrada?: number;

  @IsNumber()
  @IsOptional()
  humedadRegistrada?: number;

  @IsString()
  @IsOptional()
  observaciones?: string;

  @IsString()
  @IsNotEmpty()
  loteVainillaId: string;
}
