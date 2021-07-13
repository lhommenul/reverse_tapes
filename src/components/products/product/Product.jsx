import React from 'react'
import { useEffect} from 'react'
import { Slider } from "../../../../node_modules/@lhommenul/slider/slider";
import "./product.css";

let data_cd = {
    id:3213,
    name:"Vinyle Album Name",
    bands:["stuffed foxed","tft"],
    types:["CD"],
    img_slider:["https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300"],
    iframe:"url",
    description:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
    price:20.2,
    colors:["red"],
    quantity:40,
    visible:false, // Boolean
    disponibility:["23-70-2021","23-70-2021","10:10","12:10"],   
    size:"M", // t-shirt ...
}   
function createCards(props) {
    const list_img = props.data.img_slider.map((image_src)=>{
        let img = document.createElement('img'); // create an img for each img pass throw the props
        img.src = image_src;
        return img;
    });
    return list_img;
}


const Product = (props) => {
    useEffect(() => {
        new Slider({
            per_pages:1,
            start:0,
            container : document.getElementsByClassName('list_cards_actu')[0],
            cards:createCards(props)
        }).init()
    },[]);
    return (
        <div className="product_container">          
            <ul className="list_cards_actu">
            </ul>
            <div className="control">
            </div> 
        </div>
    )
}

export default Product
