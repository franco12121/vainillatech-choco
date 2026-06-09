import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LoteVainilla } from '../../lotes/entities/lote.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

export enum ResultadoCalidad {
  OK = 'OK',
  NOK = 'NOK',
}

@Entity({ name: 'reportes_calidad' })
export class ReporteCalidad {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  fechaInspeccion: Date;

  @Column({ type: 'enum', enum: ResultadoCalidad })
  resultado: ResultadoCalidad;

  @Column()
  color: string;

  @Column({ type: 'float' })
  tamañoPromedioCm: number;

  @ManyToOne(() => LoteVainilla, (lote) => lote.reportesCalidad, { onDelete: 'CASCADE' })
  loteVainilla: LoteVainilla;

  @ManyToOne(() => Usuario, (usuario) => usuario.reportesCalidad, { eager: true })
  usuario: Usuario;
}
