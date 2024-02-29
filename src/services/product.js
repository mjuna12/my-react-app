import axios from "axios";

export const getProducts = (callback) => {
    axios
    .get("https://fakestoreapi.com/products")
    .then((res)=>{
    callback(res.data)
    }).catch((error)=>{
        console.log(error)
    })
}

export const getDetailProducts = (id, callback) => {
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
        callback(res.data)
    }).catch((error)=>{
        console.log(error)
    })
} 