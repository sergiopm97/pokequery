const getPokemons = (numberOfPokemons) => {

    let pokemons = new Array(0);

    for (let id = 0; id < numberOfPokemons; id++) {

        const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}/`)
            .then(response => { return response.json() })

        pokemons.push(pokemon);
    }

    return pokemons
}

export { getPokemons };