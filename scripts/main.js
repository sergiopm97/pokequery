import { getPokemons } from "./pokemons/getPokemons.js";
import { showPokemons } from "./pokemons/showPokemons.js";
import { filterPokemon } from "./pokemons/filterPokemon.js";

const pokemonsToShow = getPokemons(649);
showPokemons(pokemonsToShow);
filterPokemon();