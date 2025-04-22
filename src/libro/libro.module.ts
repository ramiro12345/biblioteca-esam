import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { Libro } from './entities/libro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Libro])], // ¡Esto es lo que falta!
  controllers: [LibroController],
  providers: [LibroService],
})
export class LibroModule {}
