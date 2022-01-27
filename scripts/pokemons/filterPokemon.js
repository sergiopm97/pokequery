const filterPokemon = () => {

    let filterInput = document.querySelector("input");
    let pokemonCards = document.querySelector(".pokemons").querySelectorAll(".pokemon-card");

    filterInput.addEventListener("input", () => {

        let pokemonInput = filterInput.value.toLowerCase();

        for (let pokemonCard = 0; pokemonCard < pokemonCards.length; pokemonCard++) {

            let pokemonName = pokemonCards[pokemonCard].className.split(" ")[1].toLowerCase();

            if (!pokemonName.includes(pokemonInput)) {
                pokemonCards[pokemonCard].style.display = "none";
            } else {
                pokemonCards[pokemonCard].style.display = "initial";
            }
        }
    })
}

export { filterPokemon };