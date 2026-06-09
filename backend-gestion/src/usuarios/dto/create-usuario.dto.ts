import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum RolUsuario {
  OPERADOR = 'OPERADOR',
  TECNICO = 'TECNICO',
}

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(RolUsuario)
  rol: RolUsuario;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
