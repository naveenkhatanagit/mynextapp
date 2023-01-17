import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react'
import { useEffect } from "react"
import { gettestimonialList } from "../../Api/HomepageApi"
import { toast } from "react-toastify"


function TestimonialsComponent() {
    const [ testimonialList, settestimonialList ] = useState([]);
  
    useEffect(() => {
    
        gettestimonialList().then((response) => {
            let res = response.data;
            if (res) {
                settestimonialList(res.data);
            }
            
        }).catch((error) => {
            toast.error("something went wrong", {
                position: "top-right",
                classNameName: "app_toast",
                autoClose: 1000,
              })
        })
    
    }, [])

   

    const testomonialSlider = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 1500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                }
            }
        ]
    };


    return (
        <section className="testimonial-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="sec-title mb-2">TESTIMONIALS</h2>
                        <h5 className="sec-sub-title mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                    </div>
                </div>

                <Slider className="testimonial-slider" {...testomonialSlider}>
                {
                  testimonialList.map((item, index) => (
                    <div className="testimonials_wrap" key={index}>
                        <div className="test-card">
                            <div className="person-img">
                                <img src="{item.image}" alt="" />
                            </div>
                            <div className="author_name">
                                <h5>{item.name}</h5>
                            </div>
                            <div className="star-rating">
                                <img src="assets/images/star.png" alt="" />
                            </div>
                            <p className="t-content">{item.content}</p>
                            <a href="#" className="">Read More...</a>
                        </div>
                    </div>
                   ))

                }

                </Slider>
            </div>
        </section>
    )
}

export default TestimonialsComponent