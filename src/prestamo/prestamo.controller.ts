import { Controller } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { BaseController } from 'src/app.controller';
import { Prestamo } from './entities/prestamo.entity';

@Controller('prestamo')
export class PrestamoController extends BaseController<Prestamo> {
  constructor(prestamoService: PrestamoService) {
    super(prestamoService);
  }
}
