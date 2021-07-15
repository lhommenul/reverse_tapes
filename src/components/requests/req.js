import axios from 'axios'



let getRangeProduct = ()=> {
    // Get the data from the bdd
    try {
        return axios({
            url:"",
            method:"GET",
        })
    } catch (error) {
        return error;
    }
}


export {
    getRangeProduct
}