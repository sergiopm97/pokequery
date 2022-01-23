const showPokemons = (pokemons) => {

    let body = document.querySelector("body");

    let pokemonsContainer = document.createElement("div");
    pokemonsContainer.className = "pokemons";

    body.appendChild(pokemonsContainer);

    for (let pokemon of pokemons) {

        let pokemonCard = document.createElement("div");
        pokemonCard.className = "pokemon-card";

        let pokemonId = document.createElement("h1");
        pokemonId.className = "pokemon-id";

        let pokemonImage = document.createElement("img");
        pokemonImage.className = "pokemon-image";

        let pokemonName = document.createElement("h1");
        pokemonName.className = "pokemon-name";

        pokemon.then(data => {
            pokemonId.textContent = data.id;
            pokemonImage.src = data.sprites.other.dream_world.front_default;
            pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            pokemonCard.id = data.types[0].type.name;
        })

        pokemonCard.appendChild(pokemonId);
        pokemonCard.appendChild(pokemonImage);
        pokemonCard.appendChild(pokemonName);

        pokemonsContainer.appendChild(pokemonCard);
    }
}

export { showPokemons };