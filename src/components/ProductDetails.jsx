// useParams es un Hook de react-router-dom
//nos permite leer los parametros que hay en la ruta
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneProduct } from "../api/dummyJsonRequest";
import { ProductsList } from "./ProductsList";
// import { BackBtn } from "./BackButton";

export const ProductDetails = () => {
    const temp = useParams();
    //console.log(temp); //logeo para entender lo que trae el hook de params
    const [product, setProduct] = useState({});

    const { productID } = useParams();

    useEffect(() => {
        getOneProduct(productID)
            .then((response) => setProduct(response))
            .catch((error) => console.log(error));
    }, [productID]);

    return (
        <>
            {product && (
                <>
                    <h2>{product.title}</h2>
                    {!product.images && <h3>Cargando imagen</h3>}
                    {product.images && (
                        <img src={product.images[0]} alt={product.title} style={{ width: "400px", height: "300px", marginBottom: "10px" }} />
                    )}
                    <p>{product.description}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Price: ${product.price}</p>
                    <hr />
                    <br />

                    <Link to="/dynamic_routes">
                        <button>Volver</button>
                    </Link>
                </>
            )}
            {/* <BackBtn /> */}
        </>
    );
};
