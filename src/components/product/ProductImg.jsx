import React from 'react'
import { useEffect} from 'react'
import { Slider } from "@lhommenul/slider";
import "./css/product.css";

function createCards(props) {
    console.log(props.pictures);
    let list_img = props.pictures.map((image_src)=>{
        let img = document.createElement('img'); // create an img for each img pass throw the props
        img.src = image_src;
        return img;
    });
    return list_img;
}


const ProductImg = (props) => {
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

export default ProductImg
