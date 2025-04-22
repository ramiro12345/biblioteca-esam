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

  findAll(): Promise<Prestamo[]> {
    return this._prestamoRepository.find();
  }

  findOne(id: number): Promise<Prestamo> {
    return this._prestamoRepository.findOneBy({ id });
  }

  async update(id: number, updatePrestamoDto: UpdatePrestamoDto): Promise<Prestamo> {
    await this._prestamoRepository.update(id, updatePrestamoDto);

    return this.findOne(id);
  }

  async remove(id: number) {
    await this._prestamoRepository.delete(id);
  }
}
