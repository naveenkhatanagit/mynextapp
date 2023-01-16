import React from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

function LayoutComponent({ children }) {
  return (
    <>
        <HeaderComponent/>
        <main>{children}</main>
        <FooterComponent/>
    </>
  )
}

export default LayoutComponent