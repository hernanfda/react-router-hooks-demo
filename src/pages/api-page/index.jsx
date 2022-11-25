import { useEffect, useRef, useState } from "react";
import { getCharacter, getPeople, searchCharacter } from "../../api/swapiRequests";

const ApiPage = () => {
    const inputSearch = useRef(null);

    const [characterList, setcharacterList] = useState([{}]); //TODO: Porque tengo que poner las llaves en los corchetes para que funcione
    const [isLoading, setIsLoading] = useState(true);
    const [currentCharacter, setCurrentCharacter] = useState(1);
    const [characterDetails, setCharacterDetails] = useState({}); //TODO: Agregar un currentCharacter dinamico
    const [inputSearchText, setInputSearchText] = useState("");

    // async function getCharacter(id = 1) {
    //     const API_URL = `https://swapi.dev/api/people/${id}`;
    //     const character = await fetch(API_URL).then((response) => response.json());
    //     return character;
    // }

    useEffect(() => {
        getPeople()
            .then((data) => {
                setcharacterList(data);
                characterList.length > 0 ? setIsLoading(false) : console.log("characterList ta vacio");
            })
            .catch((error) => console.log(error)); //Completo characterList con la data que me traigo de la request
    }, []); //TODO: Porque actualiza cuando completo la busqueda si no esta escuchando a characterlist en el array???

    //Cuando cambia el current character, hago un pedido nuevo a la api al character especifico
    useEffect(() => {
        getCharacter(currentCharacter)
            .then((data) => setCharacterDetails(data))
            .catch((error) => console.log(error));
    }, [currentCharacter]);

    //--CHARACTER DETAILS--
    const showDetailsHandler = (character) => {
        //toma el character que viene desde el .map()
        const characterID = Number(character.url.split("/").slice(-2)[0]);
        setCurrentCharacter(characterID);
    };

    //--SEARCHBAR--
    //Primero capturo el valor que se ingresa en el campo de busqueda y lo asigno al estado inputSearchText
    const searchTextHandler = () => {
        setInputSearchText(inputSearch.current.value);
    };
    //Luego cuando el usuario presiona 'Enter' envio una peticion al endpoint de busqueda de la API
    const onSearchSubmit = (event) => {
        //Si presiona cualquier tecla que NO sea 'Enter' salgo de esta funcion
        if (event.key != "Enter") return;
        //seteo characterList con la info que trae searchCharacter
        searchCharacter(inputSearchText).then(setcharacterList);
    };

    //TODO: Me falta agregarle paginacion de resultados

    return (
        <>
            <h2>Star Wars character list</h2>
            <input ref={inputSearch} type="text" placeholder="search..." onChange={searchTextHandler} onKeyDown={onSearchSubmit} />
            <p>(Click on each character for more details)</p>
            {isLoading && <h3>Loading...</h3>}
            {!isLoading && (
                <ul>
                    {/* USAR PARENTESIS EN LUGAR DE LLAVES EN EL CALLBACK DEL MAP */}
                    {characterList.map((character) => (
                        //TODO: PORQUE TENGO QUE PASAR EL ONCLICK ASI EN LUGAR DE USAR DIRECTAMENTE LA FUNCION
                        <li onClick={() => showDetailsHandler(character)} key={Number(character.url.split("/").slice(-2)[0])}>
                            {Number(character.url.split("/").slice(-2)[0])} - {character.name}
                            <br />
                        </li>
                    ))}
                </ul>
            )}
            {currentCharacter && (
                <>
                    <h1>Character details</h1>
                    <ul>
                        <li>Name: {characterDetails.name}</li>
                        <li>Height: {characterDetails.height}</li>
                        <li>Birth Year: {characterDetails.birth_year}</li>
                    </ul>
                </>
            )}
            <p>This was made using the SWAPI API</p>
        </>
    );
};

export default ApiPage;
