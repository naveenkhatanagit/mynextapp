import Head from 'next/head'
import { Inter } from '@next/font/google'

import HomepageComponent from '@/Components/Homepage/HomepageComponent';
import HeaderComponent from '@/Components/Layouts/HeaderComponent';
import FooterComponent from '@/Components/Layouts/FooterComponent';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>Find out all Uniforms, Shoes & Accessories for your school</title>
        <meta name="description" content="Find out all Uniforms, Shoes & Accessories for your school" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <HomepageComponent />


    </>
  )
}
