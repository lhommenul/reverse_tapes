import axios from 'axios'



let getRangeProduct = ()=> {
    // Get the data from the bdd
    try {
        return axios({
            method:"GET",
            url:"http://localhost:8080/range"
        })
    } catch (error) {
        return error;
    }
}

let getProducts = (obj)=> {
    // Get the data from the bdd
    try {
        return axios({
            method:"GET",
            url:"http://localhost:8080/product",
            params:{
                id:obj?.id??""
            }
        })
    } catch (error) {
        return error;
    }
}


export {
    getRangeProduct,
    getProducts
}