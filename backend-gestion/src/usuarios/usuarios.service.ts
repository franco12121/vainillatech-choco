import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
      const usuario = this.usuarioRepository.create(createUsuarioDto);
      return await this.usuarioRepository.save(usuario);
    } catch (error: any) {
      if (error?.code === '23505') {
        throw new ConflictException('El correo electrónico ya está registrado.');
      }

      if (error?.code === '22P02' || error?.message?.includes('enum')) {
        throw new BadRequestException('El valor de rol no es válido.');
      }

      throw error;
    }
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  async findOne(id: string) {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (!usuario) {
      throw new NotFoundException(`Usuario ${id} no encontrado.`);
    }
    return usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuarioRepository.update(id, updateUsuarioDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
    return { deleted: true, id };
  }
}
