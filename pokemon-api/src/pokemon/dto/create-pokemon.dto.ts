import { IsString } from "class-validator";

export class CreatePokemonDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly image: string;

    @IsString({each: true})
    readonly types: string[];
}
