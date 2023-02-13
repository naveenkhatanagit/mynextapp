import React from 'react'
import { useEffect } from "react"
import Link from 'next/link'
import { useState } from 'react'
import { getcardDetails, Removecartitemapi, Updatequantityitem } from '../Api/Api'
import { toast } from "react-toastify"
import { useSelector } from 'react-redux'



function cart() {
   
    const [userCartList, setuserCartList] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);

    

    const { userInfo } = useSelector((state) => state.auth)
   
    useEffect(() => {
        var customerId = null;
        
        if(userInfo != null){
             customerId = userInfo.id;
             var cartsession = customerId;
             var type = "customer_id";
        }else{
            var cartsession = sessionStorage.getItem('cartsession');
            var type = "session_id";
        }

        getcardDetails(cartsession, type).then((response) => {
            let res = response.data;

            if (res) {
                setuserCartList(res.data);
                var total_price_cal = 0;

                res.data.forEach(element => {
                    total_price_cal += parseFloat(element.product_details.selling_price) * parseFloat(element.quantity);
                });

                settotalPrice(total_price_cal)
            }

        }).catch((error) => {
          
        })

    }, [userInfo])

    const Removecartitem = (index, item) => {
        setuserCartList(userCartList.filter((v, i) => i !== index));

        Removecartitemapi(item.id).then((response) => {
            userCartList.splice(index, 1);
            var total_price_cal = 0;
            userCartList.forEach(element => {
                total_price_cal += parseFloat(element.product_details.selling_price) * parseFloat(element.quantity);
            });

            settotalPrice(total_price_cal)
            toast.success("item removed successfully!", {
                position: "top-right",
                className: "app_toast",
                autoClose: 1000,
            })

        }).catch((error) => {
            toast.error("something went wrong", {
                position: "top-right",
                className: "app_toast",
                autoClose: 1000,
            })
        })
    }

    const Quantitychangeitem = (index, item, event) => {

        let lists = [...userCartList];

        let use = { ...lists[index] };
        use["quantity"] = event.target.value;
        lists[index] = { ...use };
        setuserCartList([...lists]);

        var total_price_cal = 0;

        lists.forEach(element => {
            total_price_cal += parseFloat(element.product_details.selling_price) * parseFloat(element.quantity);
        });

        settotalPrice(total_price_cal)

        var formdata = new FormData();
        formdata.append('cart_id', item.id);
        formdata.append('quantity', event.target.value);

        Updatequantityitem(formdata);

        toast.success("Cart updated successfully", {
            position: "top-right",
            className: "app_toast",
            autoClose: 1000,
        })


    }


    return (
        <>

            <section className="Breadcrub_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>


            <section className="shopping_cart">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">




                            {
                                userCartList.map((item, index) => (
                                    <div className="cart_list_item d-flex" key={index}>
                                        <div className="item_thumb"><a href="#"><img src={item.product_details.images[0].image} alt="" /></a></div>
                                        <div className="item_name">
                                            <h4>{item.product_details.product_name}</h4>
                                            <a href="#">Size Chart</a>
                                        </div>

                                        <div className="item_quantity">
                                            <select className="form-select" value={item.quantity} onChange={(event) => Quantitychangeitem(index, item, event)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <div className="item_price">
                                            Rs {(item.product_details.selling_price * item.quantity).toFixed(2)}
                                        </div>

                                        <div className="add_remove">
                                            <div><a type="button" onClick={() => Removecartitem(index, item)}>Remove</a></div>
                                            <div><a href="#">Add To Wishlist</a></div>
                                        </div>
                                    </div>

                                ))

                            }





                        </div>
                    </div>

                    {userCartList.length == 0 ? 'No Item in the cart' : <div className="row">
                        <div className="col-lg-12">
                            <div className="total text-end">
                                <div className="total_item_price">Rs {totalPrice.toFixed(2)}</div>
                                <p>Tax included. <a href="#">Shipping</a> Calculated at checkout page</p>
                                <Link href="/checkout" className="btn checkout">Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>}






                </div>
            </section>
        </>
    )
}

export default cart

