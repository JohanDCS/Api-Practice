import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
   
@Entity()
export class Persona {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    primer_nombre: string;
    @Column()
    segundo_nomre: string;
    @Column()
    primer_apellido: string;
    @Column()
    segundo_apellido:string;
    @Column()
    numero_celular: number;
    @Column()
    tipoDoc: string;
    @Column()
    NumDoc: number;
    @Column()
    Edad: number;
}