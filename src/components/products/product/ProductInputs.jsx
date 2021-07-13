import Cookies from 'js-cookie';
import React from 'react'
import { useEffect } from "react";


    

const ProductInputs = (props) => {
    let format_price = props.price + "$";
    useEffect(() => {
        generateOptions();// create options 
        filter();//set rules for inputs
    }, []);
    // Generate options for every siblings from the bdd
    function generateOptions() {
        return [
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
        ].forEach(e=>{
            const opt = document.createElement('option');
            opt.value = e.size;
            opt.textContent = e.size;
            document.querySelector("#selection_opt").appendChild(opt)
        })
        // add to cart
        function initialiseCart() {
            document.querySelector("#form_inputs_product").addEventListener("submit",e=>{
                e.preventDefault();
                const quantity = e.target["input_quantity"].value;
                // e.target["selection_opt"].value;
                let i = Cookies.getJSON("cart");
                if (i) {
                    let list = JSON.parse(i.articles);
                } else {      
                    Cookies.set("cart",{articles:JSON.stringify([{id:props._id,quantity:40}])})
                }
            })
        }
    }
    // Set the rules for the inputs
    function filter() {
        let value = 1;
        const q = document.querySelector(".input_quantity");
        q.addEventListener("input",()=>{
            q.value = parseInt(q.value);
            if (q.value > props.quantity || q.value < 0) { // if the value is beetween 1 and the nb quantity of articles
                q.value = value;
            }else{ 
                value = q.value; // reset the value to the last good value
            }
        })
    }
    return (
        <div>
            <h1>{props.title}</h1> {/* prduct type ex : STUFFED FOXES */}
            <hr />
            <h2>{props.type}</h2> {/* prduct type ex : T-Shirt */}
            <p>{format_price}</p> {/* product price : 20$ */}
            <hr />
            <form action="" id="form_inputs_product">
                <label htmlFor="">
                    {props?.quantity} produits en stock
                    <input type="number" value="1" max={props.quantity} min="0" name="input_quantity" className="input_quantity" placeholder="default palceholder"/> {/* input quantity products */}
                </label>
                <label htmlFor="">
                    <select name="" id="selection_opt" name="selection_opt">
                    </select>
                </label>
                <button type="submit">ajouter au panier</button>
            </form>
        </div>
    )
}

export default ProductInputs
