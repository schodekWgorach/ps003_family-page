
import './scss/main.scss'
/*===========================NavBar=================================*/
import ColorSchemesExample from "./components/element/navBar";
/*===========================Carousel=================================*/
import IndividualIntervalsExample from "./components/element/carousel";
/*===========================Documents=================================*/
import ThreeContainer from "./components/element/threeContainer";
/*===========================Person=================================*/
import FourCards from "./components/element/fourCards";
import Footer from "./components/element/footer";
import Copyright from "./components/element/copyright";


function App() {
  return (
    <div >
      <ColorSchemesExample />
        <IndividualIntervalsExample />
            <ThreeContainer />
                <FourCards />
                {/*<Index /> dodane przez Grześka ale nie wiem dlaczego? */}
            <Footer />
        <Copyright />
    </div>
  );
}

export default App;
