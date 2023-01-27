import React from 'react'
import { getschoolList } from "../../Api/HomepageApi"
import { useState, useEffect } from 'react'
import SchoolComponent from './SchoolComponent';

function FeaturedContentComponent() {

    const [schoolList, setSchoolList] = useState([]);

    useEffect(() => {

        getschoolList().then((response) => {
            let res = response.data;
            if (res) {
                setSchoolList(res.data);
            }

        }).catch((error) => {
            toast.error("something went wrong", {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
            })
        })

    }, [])

    return (
        <section className="school-sec pt-0">
            {/* <!---------------------------------> */}
            <div className="container policy_section mb-5">
                <div className="row">
                    <div className="col-lg-3 col-md-3 text-center">
                        <div className="ft-box mb-4 mb-sm-0">
                            <img src="assets/images/custom-dress.png" className="w-100" alt="" />
                            <h4>CUSTOMIZED DRESSES</h4>
                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 text-center">
                        <div className="ft-box mb-4 mb-sm-0">
                            <img src="assets/images/return-policy.png" className="w-100" alt="" />
                            <h4>14 DAYS RETURN POLICY</h4>
                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 text-center">
                        <div className="ft-box mb-4 mb-sm-0">
                            <img src="assets/images/free-shipping.png" className="w-100" alt="" />
                            <h4>FREE SHIPPING</h4>
                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 text-center">
                        <div className="ft-box">
                            <img src="assets/images/cod.png" className="w-100" alt="" />
                            <h4>CASH ON DELIVERY</h4>
                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!---------------------------------> */}

            <SchoolComponent schoolList={schoolList} />
        </section>
    )
}

export default FeaturedContentComponent