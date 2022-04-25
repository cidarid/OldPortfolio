import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect} from "react"
import NavbarBS from "@components/NavbarBS"
import {SSRProvider} from "react-bootstrap"



function Application({ Component, pageProps }) {

  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])

  return(
    <SSRProvider>
      <NavbarBS/>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default Application
