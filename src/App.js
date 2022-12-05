//import './App.css';
import Header from "./components/Main/header";
import Carousel from "./components/Main/carousel"; // import
import FourContainer from "./components/Main/fourContainer";
import FourCards from "./components/Main/fourCards";
import Footer from "./components/Main/footer";
import Copyright from "./components/Main/copyright";

function App() {
  return (
    <div className="App">
      <Header />
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
