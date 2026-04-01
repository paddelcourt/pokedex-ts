
import { State} from "./state.js";

export async function catchPokemon (state: State, ...args: string[]) {
    const name = args[0];
    console.log("Throwing a Pokeball at " + name + "...")
    const pokemon = await state.pokeAPI.fetchPokemon(name)
    const chance = Math.random()
    const baseExperienceMultiplier = pokemon.base_experience/2000

    if (chance > (0.5 + baseExperienceMultiplier)) {
        console.log(name + " was caught!")
        state.pokedex[name] = pokemon;
        
    }

    else if (chance <= (0.5 + baseExperienceMultiplier)) {
        console.log(name + " escaped")

    }

    else {
        console.log("Did not recognize pokemon name")
    }
    
}