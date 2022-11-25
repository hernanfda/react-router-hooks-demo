export async function getProducts() {
    const API_URL = "https://dummyjson.com/products";
    const { products } = await fetch(API_URL + "?limit=10")
        .then((response) => response.json())
        .catch((error) => console.log(error));
    return products;
}
export async function getOneProduct(productID) {
    const API_URL = `https://dummyjson.com/products/${productID}`;
    const product = await fetch(API_URL)
        .then((response) => response.json())
        .catch((error) => console.log(error));
    return product;
}
