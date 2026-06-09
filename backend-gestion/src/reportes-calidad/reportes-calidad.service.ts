import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportesCalidadDto } from './dto/create-reportes-calidad.dto';
import { UpdateReportesCalidadDto } from './dto/update-reportes-calidad.dto';
import { ReporteCalidad } from './entities/reporte-calidad.entity';

@Injectable()
export class ReportesCalidadService {
  constructor(
    @InjectRepository(ReporteCalidad)
    private readonly reporteRepository: Repository<ReporteCalidad>,
  ) {}

  create(createReportesCalidadDto: CreateReportesCalidadDto) {
    const reporte = this.reporteRepository.create(createReportesCalidadDto);
    return this.reporteRepository.save(reporte);
  }

  findAll() {
    return this.reporteRepository.find({ relations: { loteVainilla: true, usuario: true } });
  }

  async findOne(id: string) {
    const reporte = await this.reporteRepository.findOne({ where: { id }, relations: { loteVainilla: true, usuario: true } });
    if (!reporte) {
      throw new NotFoundException(`Reporte de calidad ${id} no encontrado.`);
    }
    return reporte;
  }

  async update(id: string, updateReportesCalidadDto: UpdateReportesCalidadDto) {
    await this.reporteRepository.update(id, updateReportesCalidadDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const reporte = await this.findOne(id);
    await this.reporteRepository.remove(reporte);
    return { deleted: true, id };
  }
}
