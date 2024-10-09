import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import InfoSection from './components/Header/InfoSection';
import GridSect from './components/gridSect/gridSect';
import News from './components/Newsletter/News';
import Sect3 from './components/Sect3/Sect3';
import Footer from './components/Footer/Footer';

function App() {
  return (
     <div className="App">
       <Navbar />
       <Hero/>
       <Info/>
       <InfoSection/>
       <GridSect/>
       <News/>
       <Sect3/>
       <Footer/>
     </div>
  );
}

export default App;
