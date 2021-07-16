import {React, useEffect,useState} from 'react'
import Card from '../components/card/Card.jsx'
import Header from '../components/header/Header.jsx'
import {getProducts} from '../components/requests/req'
import "./css/boutique.css"


const Boutique = () => {
    let [list_element, setstate] = useState([]);
    useEffect(() => {
        console.log(process.env);
        getProducts().then(response=>{
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
                        return <Card data={prop} key={prop._id}></Card>
                    })
                }
            </ul>
        </div>
    )
}

export default Boutique
