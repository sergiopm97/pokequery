import { getPokemons } from "./pokemons/getPokemons.js";
import { showPokemons } from "./pokemons/showPokemons.js";

const pokemonsToShow = getPokemons(649);
showPokemons(pokemonsToShow);