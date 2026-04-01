import { commandExit } from "./command_exit.js";

import { commandHelp } from "./command_help.js";
import { mapLocations, mapLocationsBack } from "./command_map.js";

import { locationExplore } from "./command_explore.js";

import { CLICommand } from "./state.js";
import { catchPokemon } from "./command_catch.js";

import { inspectPokemon } from "./command_inspect.js";

import { listPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the Pokedex",
      callback: commandExit,
    },
    help: {
        name: "help",
        description: "Displays a help message",
        callback: commandHelp
    },

    map: {
        name: "map",
        description: "Displays location",
        callback: mapLocations
    },

    mapb: {
        name: "mapb",
        description: "Navigates to previous page for map",
        callback: mapLocationsBack
    },

    explore: {
      name: "explore",
      description: "explore pokemon in location area",
      callback: locationExplore
    },

    catch: {
      name: "catch",
      description: "catch pokemon",
      callback: catchPokemon
    },

    inspect: {
      name: "inspect",
      description: "inspect pokemon",
      callback: inspectPokemon
    },

    pokedex: {
      name: "pokedex",
      description: "lists all the pokemon in pokedex",
      callback: listPokedex
    }

    }
  };
