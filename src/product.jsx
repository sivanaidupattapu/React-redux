import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Product(props) {
    console.log(props)
    var [item, setItem] = useState()
    useEffect(() => {
        fetch('https://fakestoreapi.in/api/products')
            .then((data) => {
                return data.json()
                    .then((res) => {
                        setItem(res.products)
                    })
            })
    }, [])
    console.log(item)
    return <div className='border border-2 border-success m-2 p-2'>
        <h2><i className='bg-primary text-light'>Products</i></h2>
        <div className='d-flex flex-wrap '>
            {
                item?.map((p, i) => {
                    return <div key={i} className='w-25 p-2 text-center border border border-danger'>
                        <img src={p.image} width='150px' alt="" />
                            <p>Brand : {p.brand}</p>
                            <p>Model : {p.model}</p>
                            <p>Category : {p.category}</p>
                            <p>Price : {p.price}.00</p>
                        <button className='btn btn-warning mb-2' onClick={()=>{props.dispatch({type:'addtocart',payload:p})}}>Add to Cart</button>
                    </div>
                })
            }
        </div>
    </div>
}
export default connect(store=>store)(Product)