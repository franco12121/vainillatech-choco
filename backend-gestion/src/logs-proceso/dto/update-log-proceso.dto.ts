import { PartialType } from '@nestjs/mapped-types';
import { CreateLogProcesoDto } from './create-log-proceso.dto';

export class UpdateLogProcesoDto extends PartialType(CreateLogProcesoDto) {}
