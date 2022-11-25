import { getProducts } from "../../api/dummyJsonRequest";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "../../components/ProductDetails";
import { ProductsList } from "../../components/ProductsList";

const DynamicRoutesPage = () => {
    const [productListState, setProductListState] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            setProductListState(data);
            console.log(data);
        });
    }, []);

    return (
        <>
            {!productListState[0] && <h2>Cargando productos</h2>}
            {/* {productListState.length > 0 && (
            )} */}
            {/* Creo un router para mis rutas dinamicas/parametrisadas de productos */}
            <Routes>
                {/* El nombre de la props debe ser igual al que paso en el componente */}
                <Route index element={<ProductsList productList={productListState} />} />
                <Route path=":productID" element={<ProductDetails />} /> {/* en path, debo agregar un placeholder que comienza con : */}
            </Routes>
        </>
    );
};

export default DynamicRoutesPage;
