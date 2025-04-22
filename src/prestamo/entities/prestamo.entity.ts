import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Prestamo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fehca: Date;

    @Column()
    lector: string;

    @Column()
    libro_id: number;
}
