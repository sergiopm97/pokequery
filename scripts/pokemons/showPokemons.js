const showPokemons = (pokemons) => {

    let body = document.querySelector("body");

    let pokemonsContainer = document.createElement("div");
    pokemonsContainer.className = "pokemons";

    body.appendChild(pokemonsContainer);

    for (let pokemon of pokemons) {

        let pokemonCard = document.createElement("div");
        let pokemonContent = document.createElement("div");
        let pokemonId = document.createElement("h1");
        let pokemonImage = document.createElement("img");
        let pokemonName = document.createElement("h1");
        let firstPokemonType = document.createElement("h3");

        pokemonCard.className = "pokemon-card";
        pokemonContent.className = "pokemon-content"
        pokemonId.className = "pokemon-id";
        pokemonImage.className = "pokemon-image";
        pokemonName.className = "pokemon-name";
        firstPokemonType.className = "pokemon-type--1";

        pokemon.then(data => {
            pokemonId.textContent = data.id;
            pokemonId.id = data.types[0].type.name + "--id";
            pokemonImage.src = data.sprites.other.dream_world.front_default;
            pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            firstPokemonType.textContent = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
            firstPokemonType.id = data.types[0].type.name + "--type";
            pokemonCard.id = data.types[0].type.name + "--card";
            pokemonCard.className += " " + data.name;
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