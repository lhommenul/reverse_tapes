import {React,useEffect} from 'react'
import "./css/card.css"
const Card = (props) => {
    useEffect(() => {
        console.log(props.data);
    }, []);
    return (
        <article className="container_card">
            <img className="card_img" src={props?.data?.pictures[0]} alt="image du produit" />
            <div className="pop_info_card">
                <p className="card_title">{props?.data?.type}</p>
                <p className="card_description">{props?.data?.description}</p>
                <button>allez a la page</button>
            </div>
        </article>
    )
}

export default Card
