import React from 'react'
import Product from "./product/Product.jsx";
import ProductIframe from "./product/ProductIframe.jsx";
import ProductDescription from "./product/ProductDescription.jsx";
import ProductInputs from "./product/ProductInputs.jsx";

let data_artist = {
    id:3213,
    name:"Vinyle Album Name",
    bands:["stuffed foxed","tft"],
    types:["CD"],
    img_slider:["https://picsum.photos/400/300","https://picsum.photos/200/300","https://picsum.photos/300/300"],
    iframe:"1477673004",
    description:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    price:20.2,
    colors:["red"],
    quantity:40,
    visible:false, // Boolean
    disponibility:["23-70-2021","23-70-2021","10:10","12:10"],   
    size:"M", // t-shirt ...
    }

const Products = () => {
    return (
        <div>
            <Product data={data_artist}
            ></Product>
            <ProductIframe
                iframe={data_artist.iframe}
            >
            </ProductIframe>
            <ProductDescription description={data_artist.description}></ProductDescription>
            <ProductInputs
                type={data_artist.types}
                quantity={data_artist.quantity}
                price={data_artist.price}
                title={data_artist.name}
            ></ProductInputs>
        </div>
    )
}

export default Products
