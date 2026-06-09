import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LotesModule } from './lotes/lotes.module';
import { LoteVainilla } from './lotes/entities/lote.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReportesCalidadModule } from './reportes-calidad/reportes-calidad.module';
import { LogsProcesoModule } from './logs-proceso/logs-proceso.module';
import { Usuario } from './usuarios/entities/usuario.entity';
import { ReporteCalidad } from './reportes-calidad/entities/reporte-calidad.entity';
import { LogProceso } from './logs-proceso/entities/log-proceso.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<string>('DB_PORT') ?? 5432),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        entities: [LoteVainilla, Usuario, ReporteCalidad, LogProceso],
        synchronize: true,
        logging: true,
      }),
    }),
    LotesModule,
    UsuariosModule,
    ReportesCalidadModule,
    LogsProcesoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
