import React from 'react';
import './css/iframe_product.css';
const ProductIframe = (props) => {
    let src_props = `https://bandcamp.com/EmbeddedPlayer/album=${props.iframe}/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/`;
    return (
        <div>
            <iframe className="iframe_product" src={src_props} seamless><a href="https://littlewhale.bandcamp.com/album/terra">Terra by Little Whale</a></iframe>
        </div>
    )
}

export default ProductIframe;
