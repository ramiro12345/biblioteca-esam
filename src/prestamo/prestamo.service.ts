import { Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Prestamo } from './entities/prestamo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PrestamoService {
  constructor(@InjectRepository(Prestamo) private _prestamoRepository: Repository<Prestamo>) { }

  create(createPrestamoDto: CreatePrestamoDto) {
    const nuevoLibro: Prestamo = this._prestamoRepository.create(createPrestamoDto);

    return this._prestamoRepository.save(nuevoLibro);
  }

  findAll() {
    return `This action returns all prestamo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestamo`;
  }

  update(id: number, updatePrestamoDto: UpdatePrestamoDto) {
    return `This action updates a #${id} prestamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamo`;
  }
}
