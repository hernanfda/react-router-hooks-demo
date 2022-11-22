import { useState, useEffect, useRef } from "react";

const CounterPage = () => {
    const [count, setCount] = useState(0); //siempre crearlo con corchetes y no llaves
    const [isNegative, setIsNegative] = useState(false);

    const warningMessage = useRef(null);

    //Simulando el ciclo de vida del producto

    useEffect(() => {
        console.log("Component did mount");
    }, []);

    useEffect(() => {
        if (count !== 0) {
            console.log("Component did update");
        }
        if (isNegative === true) {
            console.log("Component did update - isNegative changed"); //Solo se va a ejecutar cuando isNegative cambie
        }
        return () => {
            //Siempre todo lo relacionado con el unmount de un componente se tiene que usar en un return del useEffect
            console.log("Component did unmount"); //Para comprobar que funciona comentar la ruta del componente Counter en App.jsx
        };
        //Siempre que se use useEffect() poner el array al final ya que sino se va a generar un loop infinito
    }, [count, isNegative]); //al poner un valor dentro del array le estoy diciendo que este atento a ese valor y que en caso de modificarse ejecute lo que hay dentro del useEffect()

    //----CICLO DE VIDA SEPARADO EN VARIOS USEEFFECT()----
    // useEffect(() => {
    //     console.log("Component did update");
    // }, [count]);

    // useEffect(() => {
    //     console.log("Component did update - isNegative changed");
    // }, [isNegative]);

    // useEffect(() => {
    //     return () => {
    //         console.log("Component did unmount");
    //     };
    // }, []);
    //---------------------------------------------------

    const incrementHandler = () => {
        //es una buena practica nombrar las funciones con "Handler"
        setCount((count) => count + 1);
        setIsNegative((isNegative) => (isNegative = false));
    };
    const decrementHandler = () => {
        count != 0 ? setCount((count) => count - 1) : setIsNegative((isNegative) => (isNegative = true));
    };

    return (
        <>
            <h1>A simple counter made with useState()</h1>
            <h2> State: (-- {count} --) </h2>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            {isNegative == false && <h3>Use the buttons in order to increment or decrement the number</h3>}
            {isNegative == true && (
                <>
                    <h4>The count can't go bellow 0</h4>
                    <h3>Use the buttons in order to increment or decrement the number</h3>
                </>
            )}
            {/* TODO: ver si con otro hook evito crear un estado para el mensaje de numero negativo */}
            <p>A simple example of component life cycle with useEffect() hook can be found in the code </p>
        </>
    );
};

export default CounterPage;
