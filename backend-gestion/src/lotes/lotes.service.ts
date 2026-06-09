import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
import { EstadoInspeccion, LoteVainilla } from './entities/lote.entity';

@Injectable()
export class LotesService {
  constructor(
    @InjectRepository(LoteVainilla)
    private readonly loteRepository: Repository<LoteVainilla>,
  ) {}

  // Estado inicial de inspección para preservar la trazabilidad del lote desde su creación.
  async create(createLoteDto: CreateLoteDto): Promise<LoteVainilla> {
    const lote = this.loteRepository.create({
      ...createLoteDto,
      estadoInspeccion: createLoteDto.estadoInspeccion ?? EstadoInspeccion.PENDIENTE,
    });

    return this.loteRepository.save(lote);
  }

  findAll() {
    return this.loteRepository.find({
      order: { fechaCosecha: 'DESC' },
    });
  }

  async findOne(id: string) {
    const lote = await this.loteRepository.findOne({ where: { id } });
    if (!lote) {
      throw new NotFoundException(`Lote ${id} no encontrado.`);
    }
    return lote;
  }

  async update(id: string, updateLoteDto: UpdateLoteDto) {
    await this.loteRepository.update(id, updateLoteDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const lote = await this.findOne(id);
    await this.loteRepository.remove(lote);
    return { deleted: true, id };
  }
}
