import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from "./pokeapi.js";

export type State = {

    commands: Record<string, CLICommand>
    readline: Interface
    pokeAPI: PokeAPI
    nextLocationsURL: string
    prevLocationsURL: string
    pokedex: Record<string, Pokemon>
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};


export function initState(cacheInterval: number) {
    const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Pokedex > '
    });


    const commandList = getCommands()


    const result: State = {
        commands: commandList,
        readline: rl,
        pokeAPI: new PokeAPI(cacheInterval), 
        nextLocationsURL: "",
        prevLocationsURL: "",
        pokedex: {}
    }

    return result

}