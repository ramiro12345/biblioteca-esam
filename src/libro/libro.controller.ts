import { Controller } from '@nestjs/common';
import { LibroService } from './libro.service';
import { BaseController } from 'src/app.controller';
import { Libro } from './entities/libro.entity';

@Controller('libro')
export class LibroController extends BaseController<Libro> {
  constructor(libroService: LibroService) {
    super(libroService);
  }
}
