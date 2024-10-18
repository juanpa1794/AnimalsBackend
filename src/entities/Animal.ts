import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Animales' })  // Decorador de clase para definir la entidad
export class Animal {
    @PrimaryGeneratedColumn()  // Decorador para indicar que es una columna primaria autogenerada
    IDAnimal: number;

    @Column('text')  // Decorador para indicar una columna de tipo texto
    Especie: string;

    @Column('int')  // Decorador para indicar una columna de tipo entero
    Edad: number;

    @Column('text')
    Situacion: string;

    @Column('text')
    Ubicacion: string;

    @Column('text')
    Ayuda: string;

    @Column('text')
    Descripcion: string;

    // Constructor opcional si quieres inicializar las propiedades
    constructor(IDAnimal: number, Especie: string, Edad: number, Situacion: string, Ubicacion: string, Ayuda: string, Descripcion: string) {
        this.IDAnimal = IDAnimal;
        this.Especie = Especie;
        this.Edad = Edad;
        this.Situacion = Situacion;
        this.Ubicacion = Ubicacion;
        this.Ayuda = Ayuda;
        this.Descripcion = Descripcion;
    }
}
