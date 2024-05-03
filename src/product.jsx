import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Product(props) {
    console.log('props :',props)
    var [item, setItem] = useState()
    useEffect(() => {
        fetch('https://fakestoreapi.in/api/products')
            .then((data) => {
                return data.json()
                    .then((res) => {
                        let temp = res.products.map((t) => { return { ...t, incart: false } })
                        setItem(temp)
                    })
            })
    }, [])
    console.log(item)
    function addcart(p, i) {
        item[i].incart = true
        setItem([...item])
        props.dispatch({ type: 'addtocart', payload: p })
    }
    return <div>
        <div className='d-flex justify-content-between'>
            <div>
                <h2 className='text-info-emphasis'>Products</h2>
            </div>
            <div>
                <h2>Cart : {props.productReducer.cart.length}</h2>

            </div>
        </div>
        <div className='d-flex flex-wrap m-2 '>
            {
                item?.map((p, i) => {
                    return <div key={i} className='w-25 p-2 text-center border border border-danger'>
                        <img src={p.image} width='150px' alt="" />
                        <p>Brand : {p.brand}</p>
                        <p>Model : {p.model}</p>
                        <p>Category : {p.category}</p>
                        <p>Price : {p.price}.00</p>
                        {!p.incart ? <button className='btn btn-warning mb-2' onClick={() => { addcart(p, i) }}>Add to Cart</button>
                            : <button className='btn btn-success mb-2'>Go to Cart</button>}
                    </div>
                })
            }
        </div>
    </div>
}
export default connect(store => store)(Product)