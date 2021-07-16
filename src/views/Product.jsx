import {React,useEffect,useState} from 'react'
import ProductImg from "../components/product/ProductImg.jsx";
import ProductIframe from "../components/product/ProductIframe.jsx";
import ProductDescription from "../components/product/ProductDescription.jsx";
import ProductInputs from "../components/product/ProductInputs.jsx";
import Header from "../components/header/Header"
import {getProducts} from "../components/requests/req"



const Product = () => {
    const [data_artist, setdata] = useState({
        pictures:["lorem"]
    });
    useEffect(() => {
        const params = new URLSearchParams(window?.location?.search ?? "");
        getProducts({id:params.get('id')})
        .then(res=>{
            console.log(res.data);
            setdata(data_artist = res.data)
        })
        .catch(err=>{
            console.error(err);
        })
    }, []);
    return (
        <div>
            <Header></Header>
            <ProductImg data={data_artist}
            ></ProductImg>
            <ProductIframe
                iframe={data_artist?.iframe}
            >
            </ProductIframe>
            <ProductDescription description={data_artist?.description}></ProductDescription>
            <ProductInputs
                type={data_artist?.types}
                _id={data_artist?.id}
                quantity={data_artist?.quantity}
                price={data_artist?.price}
                siblings_id={data_artist?.siblings_id}
                title={data_artist?.name}
            ></ProductInputs>
        </div>
    )
}

export default Product
