import Header from './Header';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Samples from './Samples'
import './App.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/aboutus" element={<AboutUs />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/samples" element={<Samples />}></Route>
      </Routes>
    </div>
  );
}

export default App;
