import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLogProcesoDto } from './dto/create-log-proceso.dto';
import { UpdateLogProcesoDto } from './dto/update-log-proceso.dto';
import { LogProceso } from './entities/log-proceso.entity';

@Injectable()
export class LogsProcesoService {
  constructor(
    @InjectRepository(LogProceso)
    private readonly logRepository: Repository<LogProceso>,
  ) {}

  create(createLogProcesoDto: CreateLogProcesoDto) {
    const log = this.logRepository.create(createLogProcesoDto);
    return this.logRepository.save(log);
  }

  findAll() {
    return this.logRepository.find({ relations: { loteVainilla: true } });
  }

  async findOne(id: string) {
    const log = await this.logRepository.findOne({ where: { id }, relations: { loteVainilla: true } });
    if (!log) {
      throw new NotFoundException(`Log de proceso ${id} no encontrado.`);
    }
    return log;
  }

  async update(id: string, updateLogProcesoDto: UpdateLogProcesoDto) {
    await this.logRepository.update(id, updateLogProcesoDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const log = await this.findOne(id);
    await this.logRepository.remove(log);
    return { deleted: true, id };
  }
}
