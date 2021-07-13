import React from 'react'
import { useEffect } from "react";

const ProductInputs = (props) => {
    let format_price = props.price + "$";
    useEffect(() => {
        // get all the size for the product
        // method to get the siblings
        // props.siblings_id
        // .then()
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
