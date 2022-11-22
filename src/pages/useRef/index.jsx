import { useRef } from "react";

const UseRefPage = () => {
    const title = useRef(null); //siempre debo iniciar en null debido a que va a "capturar" el elemento luego de renderizar la pagina
    const subtitle = useRef(null);

    const titleHandler = () => {
        //las propiedades van a estar en .current
        title.current.style.color === "" ? (title.current.style.color = "red") : (title.current.style.color = "");
        subtitle.current.classList.add("test-class"); //tambien podemos agregar clases o incluso usar innerHTML
    };

    return (
        <>
            <h2 ref={title}>useRef page</h2>
            <button onClick={titleHandler}>Change title color</button>
            <h3 ref={subtitle} className="test-class-none">
                You are now using the useRef() hook
            </h3>
        </>
    );
};

export default UseRefPage;
