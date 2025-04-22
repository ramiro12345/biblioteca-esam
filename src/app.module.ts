import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibroModule } from './libro/libro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro/entities/libro.entity';
import { PrestamoModule } from './prestamo/prestamo.module';
import { Prestamo } from './prestamo/entities/prestamo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',       // cambiá según tu config
      password: '',// cambiá según tu config
      database: 'biblioteca',  // cambiá según tu config
      entities: [Libro, Prestamo],
      synchronize: true, // ¡Solo para desarrollo!
    }),
    LibroModule,
    PrestamoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
