import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReporteCalidad } from '../../reportes-calidad/entities/reporte-calidad.entity';

export enum RolUsuario {
  OPERADOR = 'OPERADOR',
  TECNICO = 'TECNICO',
}

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column({ type: 'enum', enum: RolUsuario, default: RolUsuario.OPERADOR })
  rol: RolUsuario;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => ReporteCalidad, (reporte) => reporte.usuario)
  reportesCalidad: ReporteCalidad[];
}

