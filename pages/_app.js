import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import {useEffect} from "react"



function Application({ Component, pageProps }) {

  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])

  return(
    <>
    <Component {...pageProps} />
      </>
  )
}

export default Application
