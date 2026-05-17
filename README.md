# Pokedex TS

A TypeScript command-line Pokedex built with the [PokeAPI](https://pokeapi.co/).
It starts an interactive REPL where you can browse location areas, explore Pokemon
encounters, try to catch Pokemon, and inspect the Pokemon you have caught.

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Run

Build and start the REPL:

```bash
npm run dev
```

Or build and run separately:

```bash
npm run build
npm start
```

## Test

```bash
npm test
```

## Commands

Run commands from the `Pokedex >` prompt.

| Command | Description |
| --- | --- |
| `help` | Show the available commands. |
| `map` | Show the next page of location areas. |
| `mapb` | Show the previous page of location areas. |
| `explore <location-area>` | List Pokemon found in a location area. |
| `catch <pokemon>` | Try to catch a Pokemon. |
| `inspect <pokemon>` | Show details for a Pokemon you have caught. |
| `pokedex` | List all Pokemon currently in your Pokedex. |
| `exit` | Exit the REPL. |

Example session:

```text
Pokedex > map
canalave-city-area
eterna-city-area
pastoria-city-area

Pokedex > explore canalave-city-area
Found Pokemon
tentacool
tentacruel
staryu

Pokedex > catch staryu
Throwing a Pokeball at staryu...
staryu was caught!

Pokedex > inspect staryu
Name: staryu
Height: 8
Weight: 345
```

## Notes

- API responses for location data are cached briefly in memory while the app is
  running.
- Caught Pokemon are stored only for the current REPL session.
