import AccountSidebarComponent from '@/Components/Account/AccountSidebarComponent'
import React from 'react'
import { toast } from "react-toastify"
import { OrderList } from '../Api/Api'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import UsernameComponent from '@/Components/Account/UsernameComponent'
import AccountBreadcrumbComponent from '@/Components/Account/AccountBreadcrumbComponent'

function MyOrders() {

    const [userOrderList, setuserOrderList] = useState([]);

    useEffect(() => {

        const userToken = sessionStorage.getItem('userToken');

        OrderList(userToken).then((response) => {
            let res = response.data;

            if (res) {
                setuserOrderList(res.data)
            }

        }).catch((error) => {

        })
    }, [])

 

    return (
        <>
        <AccountBreadcrumbComponent pagename="My Orders"/>
            <section class="user_profile">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-12 d-none d-lg-block">
                            <div class="Profile_sidebar">
                               <UsernameComponent/>

                                <AccountSidebarComponent />
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div class="user_info_rightbar my-order-right-sidebar">
                                {
                                    userOrderList.map((item, index) => (
                                        <div class="my_order_list d-flex">
                                            <div class="">
                                                <p class="p_items">Purchasd Items: <span class='text-dark'>{item.order_items.length}</span></p>
                                                <p class="total_amount">Total: <span class='text-success fw-bold'>₹ {item.total_amount}</span></p>
                                                {
                                                    item.order_items.map((order_item, order_items_index) => (
                                                        <>
                                                        <hr />
                                                            <div class="my_oder_info d-flex">
                                                                <img class="thumbnail thumbsquare" src={order_item.product_image} alt="" />
                                                                <div class="ps-3 w-100">
                                                                    <h4>{order_item.product_title}</h4>

                                                                    <div class="d-flex btn_group">
                                                                        <Link href={'product/'+order_item.product_id} class="orange_btn btn"><img src="assets/images/refresh.svg" alt="" /><span> Buy it again</span></Link>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            

                                                        </>



                                                    ))

                                                }

                                            </div>
                                            <div class="right_rside">
                                                <p class="orders_id">Order # {item.order_no}</p>
                                                <p class="ship_to">Ship to <a href="#">{item.shipping_order_address.full_name}</a></p>
                                                <p class="ship_to">Mobile Number <a href="#">{item.shipping_order_address.mobile_number}</a></p>
                                                <p class="ship_to">{item.shipping_order_address.address_line_1},{item.shipping_order_address.town_or_city},{item.shipping_order_address.pincode},{item.shipping_order_address.state}</p>
                                                <p class="invoice"><a href="#">Invoice</a></p>
                                            </div>
                                        </div>
                                    ))

                                }
                            {userOrderList.length == 0 ? 'No order yet' :''}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default MyOrders