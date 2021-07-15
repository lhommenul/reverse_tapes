import {React} from 'react';
import axios from 'axios';

const Range = (props) => {
    return (
        <article>   
            <img className="range_picture" src="https://picsum.photos/300/300" alt="image du produit range" />
            {/* CONTENT */}
            <div className="range_content_container">
                <p className="range_content_title">{props.type}</p>
                <p className="range_content_description">{props.description}</p>
            </div>
        </article>
    )
}

export default Range
