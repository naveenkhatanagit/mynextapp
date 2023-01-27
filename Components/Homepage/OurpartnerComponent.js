import React from 'react'
import { getOurPartnerList } from "../../Api/HomepageApi"
import { useState, useEffect } from 'react'
import Slider from "react-slick";
import Image from 'next/image'

const OurpartnerComponent = () => {

  const [ourPartnerList, setOurPartnerList] = useState([]);

  useEffect(() => {

    getOurPartnerList().then((response) => {
      let res = response.data;
      if (res) {
        setOurPartnerList(res.data);
      }

    }).catch((error) => {
      toast.error("something went wrong", {
        position: "top-right",
        classNameName: "app_toast",
        autoClose: 1000,
      })
    })

  }, [])

  const ourpartnerSlider = {
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: false,
            }
        }
    ]
};

  return (
    <section className="our_partners">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="sec-title mb-2">OUR PARTNERS</h2>
            <h5 className="sec-sub-title mb-5 text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
          </div>
        </div>

        <Slider className="ourpartner-slider" {...ourpartnerSlider}>
        
          {
            ourPartnerList.map((item, key) => (
              <div className="logo_box" key={key}>
                <img src={item} alt="logos" />
              </div>

            ))

          }
        
        </Slider>
      </div>
    </section>
  )
}

export default OurpartnerComponent
