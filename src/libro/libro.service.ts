import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './entities/libro.entity';

@Injectable()
export class LibroService {
  constructor(@InjectRepository(Libro) private libroRepository: Repository<Libro>) { }

  public create(createLibroDto: CreateLibroDto) {
    const nuevoLibro = this.libroRepository.create(createLibroDto);

    return this.libroRepository.save(nuevoLibro);
  }

  public findAll(): Promise<Libro[]> {
    return this.libroRepository.find();
  }

  public findOne(id: number): Promise<Libro> {
    return this.libroRepository.findOneBy({ id });
  }

  public async update(id: number, updateLibroDto: UpdateLibroDto): Promise<Libro> {
    await this.libroRepository.update(id, updateLibroDto);

    return this.findOne(id);
  }

  public async remove(id: number): Promise<any> {
    await this.libroRepository.delete(id);
  }
}
