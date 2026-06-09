import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportesCalidadService } from './reportes-calidad.service';
import { CreateReportesCalidadDto } from './dto/create-reportes-calidad.dto';
import { UpdateReportesCalidadDto } from './dto/update-reportes-calidad.dto';

@Controller('reportes-calidad')
export class ReportesCalidadController {
  constructor(private readonly reportesCalidadService: ReportesCalidadService) {}

  @Post()
  create(@Body() createReportesCalidadDto: CreateReportesCalidadDto) {
    return this.reportesCalidadService.create(createReportesCalidadDto);
  }

  @Get()
  findAll() {
    return this.reportesCalidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportesCalidadService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportesCalidadDto: UpdateReportesCalidadDto) {
    return this.reportesCalidadService.update(id, updateReportesCalidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportesCalidadService.remove(id);
  }
}
