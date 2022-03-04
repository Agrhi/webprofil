import './App.css';
import Header from './Components/Header'
import Dashboard from './Menu/Dashboard/Dashboard';
import Footer from './Components/Footer';
import About from './Menu/About/About';
import Moto from './Menu/Footer/Moto';
import Contact from './Menu/Kontak/Contact';
import Projeck from './Menu/Program/Projeck';

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <div className="content">
        <Dashboard />
        <Projeck />
        <About />
        <Contact />
      </div>
      <Moto />
      <Footer />
    </div>
    </>
  );
}

export default App;
