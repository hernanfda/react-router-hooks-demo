import { Link } from "react-router-dom";

export const ProductsList = ({ productList = [] }) => {
    return (
        <>
            <h1>Product List:</h1>
            <ul>
                {productList.map((product) => (
                    <li key={product.id} style={{ textAlign: "left" }}>
                        <h4>{product.title}</h4>
                        <img src={product.thumbnail} alt={product.title} style={{ width: "300px", marginBottom: "10px" }} />
                        <br />
                        <Link to={`/dynamic_routes/${product.id}`}>
                            <button>Details</button>
                        </Link>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};
