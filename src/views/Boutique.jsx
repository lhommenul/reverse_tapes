import {React, useEffect} from 'react'
import Range from '../components/range/Range.jsx'
import {getRangeProduct} from '../components/requests/req'


const Boutique = () => {
    useEffect(() => {
        getRangeProduct().then(response=>{
            console.log(response.data);
        })
        .catch(error=>{
            console.error(error);
        })
    }, []);
    return (
        <div>
            {/* HEADER */}
            {/* TITLE */}
            {/* CONTENT */}
            <Range></Range>
        </div>
    )
}

export default Boutique
