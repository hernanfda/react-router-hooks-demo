//TODO: Usar Axios para los api request

//Expoertando las funciones individuales, posbilito usar destructuring para importarlas

export async function getPeople() {
    const API_URL = "https://swapi.dev/api/people";
    const { results } = await fetch(API_URL) //desestructuro results que es donde viene la info de los personajes
        .then((response) => response.json())
        .catch((error) => console.log(error));
    return results;
}

export async function getCharacter(id = 1) {
    const API_URL = `https://swapi.dev/api/people/${id}`;
    const data = await fetch(API_URL) //No es necesario destructuring ya que trae directamente la info del personaje
        .then((response) => response.json())
        .catch((error) => console.log(error));
    return data;
}

export async function searchCharacter(searchText) {
    const API_URL = `https://swapi.dev/api/people/?search=${searchText}`;
    const { results } = await fetch(API_URL) //desestructuro results que es donde viene la info de los personajes
        .then((response) => response.json())
        .catch((error) => console.log(error));
    return results;
}
