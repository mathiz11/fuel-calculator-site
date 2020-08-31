import React from 'react'
import Header from './header'
import Footer from './footer'

import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../styles/main.scss'

const Layout = ({ children, title }) => {
  return (
    <>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout