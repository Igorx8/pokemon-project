import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { Type } from './entities/type.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,

    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>
  ) { }

  async create(createPokemonDto: CreatePokemonDto) {
    const types = await Promise.all(
      createPokemonDto.types.map((name) => this.preLoadByName(name))
    )

    const pokemon = await this.pokemonRepository.findOne({ where: { image: createPokemonDto.image } })

    if (pokemon) return 'Pokemon já existe'

    const newPokemon = this.pokemonRepository.create({
      ...createPokemonDto,
      types
    })

    this.pokemonRepository.save(newPokemon)
    return 'Pokemon salvo com sucesso!'

  }

  findAll() {
    return this.pokemonRepository.find()
  }

  findOne(id: number) {
    return this.pokemonRepository.findOne({ where: { id } })
  }

  async remove(id: number) {
    let pokemon = await this.pokemonRepository.findOneBy({ id })

    if (!pokemon) {
      return 'O pokemon já foi excluído'
    }
    else {
      this.pokemonRepository.delete({ id })
      return 'Pokemon excluído com sucesso!'
    }
  }

  private async preLoadByName(name: string): Promise<Type> {
    const type = await this.typeRepository.findOne({ where: { name } })

    if (type) {
      return type;
    }

    let newTag = this.typeRepository.create({ name })

    return this.typeRepository.save(newTag);
  }
}
