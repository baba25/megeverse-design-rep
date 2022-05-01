import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Activate from './components/Activate';
import Building from './components/Building';
import Story from './components/Story';
import Footer from './components/Footer';
import Howitwork from './components/Howitwork';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import './App.css';

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Benefits />
    <Activate />
    <Building />
    <Howitwork />
    <Story />
    <Footer />
    {/* <FontAwesomeIcon icon={faCoffee} /> */}
    </div>
  );
}


export default App;
