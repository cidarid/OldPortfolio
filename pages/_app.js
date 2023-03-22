import '@styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useEffect} from "react";
import NavbarBS from "@components/NavbarBS";
import Footer from "@components/Footer";
import {SSRProvider} from "react-bootstrap";


function Application({Component, pageProps}) {

  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }, []);

  return (
    <SSRProvider>
      <NavbarBS/>
      <Component {...pageProps} />
      <Footer/>
    </SSRProvider>
  );
}

export default Application;
