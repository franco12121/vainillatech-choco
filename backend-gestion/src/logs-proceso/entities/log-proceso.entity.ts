import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LoteVainilla } from '../../lotes/entities/lote.entity';

export enum EtapaProceso {
  CARGA = 'CARGA',
  ESCALDADO = 'ESCALDADO',
  SUDADO = 'SUDADO',
  SECADO = 'SECADO',
  AFINADO = 'AFINADO',
}

@Entity({ name: 'logs_proceso' })
export class LogProceso {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  timestamp: Date;

  @Column({ type: 'enum', enum: EtapaProceso })
  etapa: EtapaProceso;

  @Column({ type: 'float', nullable: true })
  temperaturaRegistrada: number | null;

  @Column({ type: 'float', nullable: true })
  humedadRegistrada: number | null;

  @Column({ type: 'text', nullable: true })
  observaciones: string | null;

  @ManyToOne(() => LoteVainilla, (lote) => lote.logsProceso, { onDelete: 'CASCADE' })
  loteVainilla: LoteVainilla;
}
