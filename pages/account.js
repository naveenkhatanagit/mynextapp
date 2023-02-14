import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify"
import Link from 'next/link'
import { useState } from 'react'
import { useGetUserDetailsQuery } from '../app/services/auth/authService'
import AccountSidebarComponent from '@/Components/Account/AccountSidebarComponent'
import UsernameComponent from '@/Components/Account/UsernameComponent'
import AccountBreadcrumbComponent from '@/Components/Account/AccountBreadcrumbComponent'

function account() {

    const { userInfo } = useSelector((state) => state.auth)


    // automatically authenticate user if token is found
    const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
        // pollingInterval: 900000, // 15mins
    })

    return (
        <>
           <AccountBreadcrumbComponent pagename="My Account"/>

            <section className="user_profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-12 d-none d-lg-block">
                            <div className="Profile_sidebar">
                                <UsernameComponent/>


                                <AccountSidebarComponent />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="user_info_rightbar">
                                <form className="Personal_info_form">
                                    <div className="mb-3">
                                        <label for="" className="form-label">Personal Information*</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="" placeholder="Full Name" value={isFetching
                                                ? 'Fetching...'
                                                : userInfo !== null
                                                    ? userInfo.name
                                                    : ''} required="" />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label for="email" className="form-label">E-mail Address*</label>
                                        <input type="email" value={isFetching
                                            ? 'Fetching...'
                                            : userInfo !== null
                                                ? userInfo.email
                                                : ''} className="form-control" id="email" placeholder="E-mail Address" required="" disabled />
                                    </div>

                                    <div className="mb-3">
                                        <label for="mobile_no" className="form-label">Mobile No.*</label>
                                        <input type="text" value={isFetching
                                            ? 'Fetching...'
                                            : userInfo !== null
                                                ? userInfo.phone
                                                : ''} className="form-control" disabled id="mobile_no" placeholder="+91 00000-00000" required="" />
                                    </div>

                                    <input type="submit" name="" value="UPDATE PROFILE" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default account