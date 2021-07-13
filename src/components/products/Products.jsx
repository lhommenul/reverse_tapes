import React from 'react'
import Product from "./product/Product.jsx";
const Products = () => {
    return (
        <div>
            <Product data={{
                id:3213,
                name:"Vinyle Album Name",
                bands:["stuffed foxed","tft"],
                types:["CD"],
                img_slider:["https://picsum.photos/400/300","https://picsum.photos/200/300","https://picsum.photos/300/300"],
                iframe:"url",
                description:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
                price:20.2,
                colors:["red"],
                quantity:40,
                visible:false, // Boolean
                disponibility:["23-70-2021","23-70-2021","10:10","12:10"],   
                size:"M", // t-shirt ...
                }}
            ></Product>
        </div>
    )
}

export default Products
