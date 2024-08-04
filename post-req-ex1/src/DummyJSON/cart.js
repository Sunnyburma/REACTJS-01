 import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
   // const [status, setStatus] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/carts/`).then((posReq) => {
             //console.log(posReq)
            const { data } = posReq;
           // const { carts } = data;
           // const { 0: cart } = carts;
            //const { products } = cart;
            //setStatus(products);
            //const users = posReq.data.carts;
            console.log(posReq.data.carts);
            setUsers(posReq.data.carts);
            
        },
            (errRes) => { console.log(errRes) })
    }, [])

    return (
        <React.Fragment>
            <h1>welcome</h1>
            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Thumbnail</th>
                        <th>Quantity</th>
                        <th>DiscountPercentage</th>
                        <th>DiscountedTotal</th>
                        <th>Total</th>
                    </tr>
                </thead>
                {users.map((product, index) => {
                    return (
                        <tbody key={product}>
                            
                            {product.products.map((c, i) =>
                            (   
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{c.id}</td>
                                    <td>{c.title}</td>
                                    <td>{c.price}</td>
                                    <td><img src={c.thumbnail} width={100} alt=""></img></td>
                                    <td>{c.quantity}</td>
                                    <td>{c.discountPercentage}</td>
                                    <td>{c.discountedTotal}</td>
                                    <td>{c.total}</td>
                                </tr>
                            ))}
                        </tbody>)
                })}
            </table>
        </React.Fragment>
    )
}
export default Cart;
