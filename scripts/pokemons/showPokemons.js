const showPokemons = (pokemons) => {

    let body = document.querySelector("body");

    let pokemonsContainer = document.createElement("div");
    pokemonsContainer.className = "pokemons";

    body.appendChild(pokemonsContainer);

    for (let pokemon of pokemons) {

        let pokemonCard = document.createElement("div");
        pokemonCard.className = "pokemon-card";

        let pokemonContent = document.createElement("div");
        pokemonContent.className = "pokemon-content"

        let pokemonId = document.createElement("h1");
        pokemonId.className = "pokemon-id";

        let pokemonImage = document.createElement("img");
        pokemonImage.className = "pokemon-image";

        let pokemonName = document.createElement("h1");
        pokemonName.className = "pokemon-name";

        let firstPokemonType = document.createElement("h3");
        firstPokemonType.className = "pokemon-type--1";

        pokemon.then(data => {
            pokemonId.textContent = data.id;
            pokemonId.id = data.types[0].type.name + "--id";
            pokemonImage.src = data.sprites.other.dream_world.front_default;
            pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            firstPokemonType.textContent = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
            firstPokemonType.id = data.types[0].type.name + "--type";
            pokemonCard.id = data.types[0].type.name + "--card";
        })

        pokemonContent.appendChild(pokemonImage);
        pokemonContent.appendChild(pokemonName);

        pokemonCard.appendChild(pokemonId);
        pokemonCard.appendChild(firstPokemonType);
        pokemonCard.appendChild(pokemonContent);

        pokemonsContainer.appendChild(pokemonCard);
    }
}

export { showPokemons };