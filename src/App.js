import './App.css';
import './global.css';


import Navigation from './components/navigation/navigation';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <About/>
      <Footer/>
    
    </div>
  );
}

export default App;
