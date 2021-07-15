import {React, useEffect,useState} from 'react'
import Range from '../components/range/Range.jsx'
import {getRangeProduct} from '../components/requests/req'


const Boutique = () => {
    let [list_element, setstate] = useState([]);
    useEffect(() => {
        getRangeProduct().then(response=>{
            setstate(list_element = response.data)
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
            {
                list_element.map(prop=>{
                    return <Range data={prop} key={prop._id}></Range>
                })
            }
        </div>
    )
}

export default Boutique
