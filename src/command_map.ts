import { PokeAPI} from "./pokeapi.js"
import { State } from "./state.js"

export async function mapLocations(state: State) {
    const url = state.nextLocationsURL

    const locations = await state.pokeAPI.fetchLocations(url)
    for (const location of locations.results) {
        console.log(location.name)
    }

    state.nextLocationsURL = locations.next
    state.prevLocationsURL = locations.previous

}


export async function mapLocationsBack(state: State) {

    if (state.prevLocationsURL==="") {
        console.log("no previous location page")
        return

    }

    const url = state.prevLocationsURL

    const locations = await state.pokeAPI.fetchLocations(url)
    for (const location of locations.results) {
        console.log(location.name)
    }

    state.nextLocationsURL = locations.next
    state.prevLocationsURL = locations.previous

}




