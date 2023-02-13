import React from 'react'
import Link from 'next/link'
import { subscribeApi } from "../../Api/Api"
import { toast } from "react-toastify"

function FooterComponent() {

    const handleSubscribeSubmit = async (event) => {
        event.preventDefault()
        var email = event.target.email.value;

        var formdata = new FormData();

        formdata.append('email', email);

        subscribeApi(formdata).then((response) => {
            toast.success("You have Subscibed Successfully")
      
          }).catch((error) => {
            toast.error(error.response.data.message, {
              position: "top-right",
              autoClose: 1000,
            })
          })

    }
    return (
        <>
            <footer className="footer_section">
                <div className="container border-b">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="logo text-start">
                                <Link href="/">
                                 <img height={55}  src={"/"+"assets/images/logofooter.png"}/>
                                </Link>
                            </div>
                            <p className="text-white pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum
                                has been the
                                industry's standard
                                dummy text ever since the 1500sbook.</p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h4 className="footer-heading mb-4 ps-0 ps-sm-4">IMPORTANT LINKS</h4>
                            <ul className="f-menu text-white ps-2 ps-sm-4">
                                <li><a href="#"><img src={"/"+"assets/images/right-arrow.png"} alt="" /> All Schools</a></li>
                                <li><a href="#"><img src={"/"+"assets/images/right-arrow.png"} alt="" /> About Us</a></li>
                                <li><a href="#"><img src={"/"+"assets/images/right-arrow.png"} alt="" /> Privacy Policy</a></li>
                                <li><a href="#"><img src={"/"+"assets/images/right-arrow.png"} alt="" /> Return & Refund Policy</a></li>
                                <li><a href="#"><img src={"/"+"assets/images/right-arrow.png"} alt="" /> All Schools</a></li>
                                <li><a href="#"><img src={"/"+"assets/images/right-arrow.png"} alt="" /> About Us</a></li>
                                <li><a href="#"><img src={"/"+"assets/images/right-arrow.png"} alt="" /> Privacy Policy</a></li>
                                <li><a href="#"><img src={"/"+"assets/images/right-arrow.png"} alt="" /> Return & Refund Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h4 className="footer-heading mb-4">ADDRESS</h4>
                            <p className="text-white"><b>Novus India</b> <br />plot no590 sec, 2nd floor jLPL sector82, Mohali-160055, Punjab,
                                India</p>
                            <ul className="contact-details list-unstyled">
                                <li><a href="#" className="email text-white "><b>Email</b>: Novasuniform@gmail.com</a></li>
                                <li><a href="#" className="call">Call: +91 79425-32257</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container pt-5 footer-bottom">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <h5><span>Subscribe to our newsletter</span> <br />and stay updated on courses</h5>
                            <form className="d-flex" role="search" onSubmit={handleSubscribeSubmit} >
                                <input className="form-control me-2" name='email' autoComplete='off' type="email" placeholder="Enter Email ID" />
                                <button className="btn drak-btn" type="submit">SUBSCRIBE</button>
                            </form>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <h4 className="text-white ps-sm-4 pt-4 pt-sm-0">Follow Us On:</h4>
                            <ul className="social-icon ps-sm-4 list-unstyled ">
                                <li><a href="#"><img src={"/"+"assets/images/insta.png"} alt="insta" /></a></li>
                                <li><a href="#"><img src={"/"+"assets/images/fb.png"} alt="fb" /></a></li>
                                <li><a href="#"><img src={"/"+"assets/images/tweet.png"} alt="tweet" /></a></li>
                                <li><a href="#"><img src={"/"+"assets/images/linkdin.png"} alt="linkdin" /></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-4 pt-4 pt-sm-0">
                            <h5>We Accept Online Payments:</h5>
                            <img src={"/"+"assets/images/paymnt.png"} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
            <section class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <p>Copyright © 2023, <a href="#">Novus India</a> . All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterComponent