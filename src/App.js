
import './scss/_custom.scss';
import './scss/main.scss';
/*===========================NavBar=================================*/
import ColorSchemesExample from "./components/element/navBar";
/*===========================Carousel=================================*/
import IndividualIntervalsExample from "./components/element/carousel";
/*===========================Documents=================================*/
import ThreeContainer from "./components/element/threeContainer";
/*===========================Person=================================*/
//import FourCards from "./components/element/fourCards";
import Contact from "./components/element/contact";
import Copyright from "./components/element/copyright";
import According from "./components/element/according";
import React from "react";
import Example from "./components/element/footer";


function App() {
  return (
    <div >
      <ColorSchemesExample />
        <IndividualIntervalsExample />
            <According />
               <ThreeContainer />
          {/*      <FourCards />*/}
                {/*<Index /> dodane przez Grześka ale nie wiem dlaczego? */}
         {/*   <Footer />*/}
                <Contact />
             <Example />
        <Copyright/>
    </div>
  );
}

export default App;
