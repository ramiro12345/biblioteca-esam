import { Get, Post, Put, Delete, Param, Body, Controller } from '@nestjs/common';

export abstract class BaseController<T> {
  constructor(
    protected readonly service: {
      findAll(): Promise<T[]>;
      findOne(id: number): Promise<T>;
      create(data: any): Promise<T>;
      update(id: number, data: any): Promise<T>;
      remove(id: number): Promise<void>;
    }
  ) {}

  @Get()
  public async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  public async create(@Body() data: any) {
    return this.service.create(data);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  public async remove(@Param('id') id: number) {
    await this.service.remove(id);
    
    return { message: 'Eliminado exitosamente' };
  }
}