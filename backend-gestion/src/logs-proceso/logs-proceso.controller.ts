import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogsProcesoService } from './logs-proceso.service';
import { CreateLogProcesoDto } from './dto/create-log-proceso.dto';
import { UpdateLogProcesoDto } from './dto/update-log-proceso.dto';

@Controller('logs-proceso')
export class LogsProcesoController {
  constructor(private readonly logsProcesoService: LogsProcesoService) {}

  @Post()
  create(@Body() createLogProcesoDto: CreateLogProcesoDto) {
    return this.logsProcesoService.create(createLogProcesoDto);
  }

  @Get()
  findAll() {
    return this.logsProcesoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logsProcesoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogProcesoDto: UpdateLogProcesoDto) {
    return this.logsProcesoService.update(id, updateLogProcesoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logsProcesoService.remove(id);
  }
}
