import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { CustomerAddresses, RemoveAddressapi, UpdateAddress } from '../Api/Api'
import AddNewAddressComponent from '@/Components/Account/AddNewAddressComponent';
import { toast } from "react-toastify"
import EditAddressComponent from '@/Components/Account/EditAddressComponent';
import AccountSidebarComponent from '@/Components/Account/AccountSidebarComponent';

function manageAddress() {
    const [userAddressList, setuserAddressList] = useState([]);

    useEffect(() => {

        const userToken = sessionStorage.getItem('userToken');

        CustomerAddresses(userToken).then((response) => {
            let res = response.data;

            if (res) {
                setuserAddressList(res.data)
            }

        }).catch((error) => {

        })
    }, [])
    const handleRemoveaddress = (index, item) => {

        const userToken = sessionStorage.getItem('userToken');
        setuserAddressList(userAddressList.filter((v, i) => i !== index));

        RemoveAddressapi(userToken, item.id).then((response) => {

            toast.success("Address removed successfully!", {
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

    const handleSetDefaultAddress = (index, item) => {

        const userToken = sessionStorage.getItem('userToken');

        let lists = [...userAddressList];

        lists.forEach(myFunction);

        function myFunction(item, myindex) {
            if (myindex == index) {
                let use = { ...lists[index] };
                use["is_default"] = 'Yes';
                lists[index] = { ...use };
            } else {
                let use = { ...lists[myindex] };
                use["is_default"] = 'No';
                lists[myindex] = { ...use };
            }
        }

        setuserAddressList([...lists]);

        var formdata = new FormData();
        formdata.append('address_id', item.id);
        formdata.append('full_name', item.full_name);
        formdata.append('mobile_number', item.mobile_number);
        formdata.append('company_name', item.company_name);
        formdata.append('pincode', item.pincode);
        formdata.append('address_line_1', item.address_line_1);
        formdata.append('address_line_2', item.address_line_2);
        formdata.append('landmark', item.landmark);
        formdata.append('town_or_city', item.town_or_city);
        formdata.append('state', item.state);
        formdata.append('delivery_instructions', item.delivery_instructions);
        formdata.append('address_type', item.address_type);
        formdata.append('is_default', 'Yes');

        UpdateAddress(userToken, formdata).then((response) => {
            toast.success('Address Updated successfully', {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })

        }).catch((error) => {
            toast.error(error.response.data.message, {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })
        })


    }



    return (
        <>
            <section class="Breadcrub_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item" aria-current="page">My Account</li>
                                    <li class="breadcrumb-item active" aria-current="page">Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="user_profile">
                <div class="container">
                    <div class="row">


                        <div class="col-lg-3 col-md-3 col-sm-3 col-12 d-none d-lg-block">
                            <div class="Profile_sidebar">
                                <div class="User_avtar_wrap d-flex">
                                    <div><img src="assets/images/user-profile.png" alt="" /></div>
                                    <div>Hello, <br /> <span class="username">Ramesh Kumar</span></div>
                                </div>

                                <AccountSidebarComponent/>
                            </div>
                        </div>


                        <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div class="user_info_rightbar">
                                <h4 class="heading_right_side_bar">Add Address*</h4>
                                <div class="Manage_Address">
                                    <button type="button" class="btn btn-primary orange_btn" data-bs-toggle="modal"
                                        data-bs-target="#add_address">
                                        Add New Address
                                    </button>

                                    <AddNewAddressComponent />

                                    <div class="all_address_grid">



                                        {
                                            userAddressList.map((item, index) => (
                                                <div class="address_grid_card">
                                                    <p class="name">{item.full_name}</p>
                                                    <p class="user_address"># {item.address_line_1},{item.address_line_2},{item.town_or_city},{item.state} </p>
                                                    <p class="user_phn">Pincode: {item.pincode}</p>


                                                    <div class="manage_address_options">
                                                        <div><a type='button' data-bs-toggle="modal" data-bs-target={'#edit_address'+item.id}>Edit</a> | <a type='button' onClick={() => handleRemoveaddress(index, item)}>Delete</a></div>
                                                        {item.is_default == 'Yes' ? <div class="default_address text-dark">Default</div> : <div class=""><a type='button' onClick={() => handleSetDefaultAddress(index, item)}>Set As Default</a></div>}


                                                    </div>
                                                    <EditAddressComponent addressItem={item} />
                                                </div>



                                            ))

                                        }

                                        {userAddressList.length == 0 ? 'No Address added yet' : ''}


                                    </div>


                                </div>











                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default manageAddress