import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect } from "react"
import NavbarBS from "@components/NavbarBS"
import Footer from "@components/Footer"
import { SSRProvider } from "react-bootstrap"
import Spacer from "@components/Spacer"



function Application({ Component, pageProps }) {

  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])

  return (
    <SSRProvider>
      <NavbarBS />
      <Component {...pageProps} />
      <Spacer height="100px" />
      <Footer />
    </SSRProvider>
  )
}

export default Application
