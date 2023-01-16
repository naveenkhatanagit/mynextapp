import React from 'react'
import FaqComponent from './FaqComponent';
import FeaturedContentComponent from './FeaturedContentComponent';
import FeatureOfferComponent from './FeatureOfferComponent';
import MainbannersliderComponent from './MainbannersliderComponent';
import OurpartnerComponent from './OurpartnerComponent';
import OurproductComponent from './OurproductComponent';
import SchoolUniformsComponent from './SchoolUniformsComponent';
import TestimonialsComponent from './TestimonialsComponent';

function HomepageComponent() {


  return (
    <main>
      
      {/* <!-------------------banner-slider--------------------------> */}
      <MainbannersliderComponent/>

      {/* <!-- =-=-=-=-=-=-= fEATURED CONTENT  section =-=-=-=-=-=-=== --> */}
      <FeaturedContentComponent/>
      

      {/* <!-- =-=-=-=-=-= Our Product =-=-=-=-=-=-=- --> */}
      <OurproductComponent/>

      {/* <!-- =-=-=-=-=-= School Uniform =-=-=-=-=-=-=- --> */}
      <SchoolUniformsComponent/>

      {/* <!-- =-=-=-=-=-=-=-= ad Banner =-=-=-=-=-=-= --> */}
      <FeatureOfferComponent/>


      {/* <!-- =-=-=-=-=-= Testimonial sec =-=-=-=-=-=-=- --> */}
      <TestimonialsComponent />

      {/* <!-- =-=-=-=-=-=-=-== FAQ sec =-=-=-=-=-=-== --> */}
      <FaqComponent/>



      {/* <!----------------------------------------------------> */}

      {/* <!-- =-=-=-=-=-= School Uniform =-=-=-=-=-=-=- --> */}
      <OurpartnerComponent/>


      

    </main>
  )
}

export default HomepageComponent