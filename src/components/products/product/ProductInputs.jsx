import React from 'react'
import { useEffect } from "react";

const ProductInputs = (props) => {
    let format_price = props.price + "$";
    useEffect(() => {
        // get all the size for the product
        // method to get the siblings
        // props.siblings_id
        // .then()
        const all_size = [
            {
                id:3213,
                name:"Vinyle Album Name",
                siblings_id:984032840,
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
                },
                {
                    id:3213,
                    name:"Vinyle Album Name",
                    siblings_id:984032840,
                    bands:["stuffed foxed","tft"],
                    types:["VINYLE"],
                    img_slider:["https://picsum.photos/400/300","https://picsum.photos/200/300","https://picsum.photos/300/300"],
                    iframe:"1477673004",
                    description:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
                    price:20.2,
                    colors:["red"],
                    quantity:40,
                    visible:false, // Boolean
                    disponibility:["23-70-2021","23-70-2021","10:10","12:10"],   
                    size:"S", // t-shirt ...
                }
        ]
    }, []);
    console.log(props.quantity);
    return (
        <div>
            <h1>{props.title}</h1> {/* prduct type ex : STUFFED FOXES */}
            <hr />
            <h2>{props.type}</h2> {/* prduct type ex : T-Shirt */}
            <p>{format_price}</p> {/* product price : 20$ */}
            <hr />
            <form action="">
                <label htmlFor="">
                    {props.quantity} produits en stock
                    <input type="text" placeholder="default palceholder"/> {/* input quantity products */}
                </label>
                <label htmlFor="">
                    <select name="" id="">
                        <option value=""></option>
                        {

                        }
                    </select>
                </label>
                <label htmlFor="">
                    <input type="text" placeholder="default palceholder"/> {/* input size product */}
                </label>
                <button type="button">ajouter au panier</button>
            </form>
        </div>
    )
}

export default ProductInputs
