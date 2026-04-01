import { State} from "./state.js";


export async function listPokedex(state: State) {
    console.log("Your Pokedex")
    for (const [key, value] of Object.entries(state.pokedex)) {
        console.log(value.name)

}
}