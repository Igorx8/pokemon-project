import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Type } from "./type.entity";

@Entity('pokemon')
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @CreateDateColumn()
  readonly createdAt: Date;

  @JoinTable()
  @ManyToMany(() => Type, (type: Type) => type.pokemons)
  types: Type[];
}
