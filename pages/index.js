import 'materialize-css/dist/css/materialize.min.css'
import Head from 'next/head'
import Navbar from '../component/Navbar';
import Footer from '../component/footer'; 
import LandingPage from '../component/landingPage'
import Router from 'next/router'

function landingPage() {

return (
    <div className="containert" style={{ padding: "1rem 0" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400&family=Klee+One&family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,400&family=Poppins:wght@100;200;300;400;500&family=Quintessential&family=Satisfy&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      
     <br />
  <LandingPage/>
<Footer/>
    </div>
  );
}

export default landingPage;


