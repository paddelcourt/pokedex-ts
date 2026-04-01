import { State } from "./state.js"

export async function locationExplore(state: State, ...args: string[]) {

    const name = args[0];

    const location = await state.pokeAPI.fetchLocation(name)
    console.log("Found Pokemon")
    for (const pokemon of location.pokemon_encounters) {
        console.log(pokemon.pokemon.name)
    }
}