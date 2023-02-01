import Head from 'next/head'
import { Inter } from '@next/font/google'

import HomepageComponent from '@/Components/Homepage/HomepageComponent';
import axios from "axios"

const backendApiUrl = "https://api.novusuniforms.com";

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {


  return (
    <>
      <Head>
        <title>Find out all Uniforms, Shoes & Accessories for your school</title>
        <meta name="description" content="Find out all Uniforms, Shoes & Accessories for your school" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomepageComponent schoolList={props.schoolList} ourParterList={props.ourParterList} faqList={props.faqList} testimonialList={props.testomonialList} />


    </>
  )
}

export async function getStaticProps(context) {

  let testimonial = await axios.get(backendApiUrl + "/api/customer/get_testimonials/list")
  const gettestimonialList = testimonial.data;


  let faq = await axios.get(backendApiUrl + "/api/customer/faq_list")

  const getFaqList = faq.data;


  let OurPartner = await axios.get(backendApiUrl + "/api/customer/our_partner")
  const getOurPartnerList = OurPartner.data;


  let ourSchool = await axios.get(backendApiUrl + "/api/customer/school_list")
  const getschoolList = ourSchool.data;


  return {
    props: { testomonialList: gettestimonialList, faqList: getFaqList, ourParterList: getOurPartnerList, schoolList: getschoolList }, // will be passed to the page component as props
    revalidate: 60,
  }

}
