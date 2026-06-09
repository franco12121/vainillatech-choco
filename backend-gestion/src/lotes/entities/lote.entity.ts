import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ReporteCalidad } from '../../reportes-calidad/entities/reporte-calidad.entity';
import { LogProceso } from '../../logs-proceso/entities/log-proceso.entity';

export enum EstadoInspeccion {
  PENDIENTE = 'PENDIENTE',
  APROBADO = 'APROBADO',
  RECHAZADO = 'RECHAZADO',
}

@Entity({ name: 'lotes_vainilla' })
export class LoteVainilla {
  // Identificador único del lote para trazabilidad y relacionamiento con otros módulos.
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 50 })
  codigoLote: string;

  @Column({ type: 'date' })
  fechaCosecha: Date;

  @Column({ type: 'float' })
  pesoGramos: number;

  @Column({
    type: 'enum',
    enum: EstadoInspeccion,
    default: EstadoInspeccion.PENDIENTE,
  })
  estadoInspeccion: EstadoInspeccion;

  @OneToMany(() => ReporteCalidad, (reporte) => reporte.loteVainilla)
  reportesCalidad: ReporteCalidad[];

  @OneToMany(() => LogProceso, (log) => log.loteVainilla)
  logsProceso: LogProceso[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
