//import './App.css';
import './scss/main.scss'
import Carousel from "./components/element/carousel"; // import
import FourContainer from "./components/element/fourContainer";
import FourCards from "./components/element/fourCards";
import Footer from "./components/element/footer";
import Copyright from "./components/element/copyright";
import ColorSchemesExample from "./components/element/navBar";


function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
        <Carousel />
            <FourContainer />
                <FourCards />
                {/*<Index /> dodane przez Grześka ale nie wiem dlaczego? */}
            <Footer />
        <Copyright />
    </div>
  );
}

export default App;
