import {React, useEffect,useState} from 'react'
import Range from '../components/range/Range.jsx'
import Header from '../components/header/Header.jsx'
import {getRangeProduct} from '../components/requests/req'
import "./css/boutique.css"


const Boutique = () => {
    let [list_element, setstate] = useState([]);
    useEffect(() => {
        console.log(process.env);
        getRangeProduct().then(response=>{
            setstate(list_element = response.data)
        })
        .catch(error=> {
            console.error(error);
        })
    }, []);
    return (
        <div>
            {/* HEADER */}
            <Header></Header>
            {/* TITLE */}
            {/* CONTENT */}
            <ul className="list_range">
                {
                    // Get the range's and loop throw all of them then append to the doc 
                    list_element.map(prop=>{
                        return <Range data={prop} key={prop._id}></Range>
                    })
                }
            </ul>
        </div>
    )
}

export default Boutique
