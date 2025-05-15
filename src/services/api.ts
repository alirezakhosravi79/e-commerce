import axios from "axios";


const client = axios.create({
    baseURL: 'https://fakestoreapi.com',
})

export async function getProducts() {
   const {data} = await client('/products')

   return data;
   
}

//fetch single product || types || bad mibarimesh azash dakhel details estfade mokonim
export async function getProduct(id: string | number) {
    const {data} = await client(`/products/${id}`);

    return data
}