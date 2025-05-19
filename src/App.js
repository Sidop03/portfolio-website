import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navigation/NavBar';
import About from './components/navigation/About';
import Home from './components/navigation/Home';
import Skills from './components/navigation/Skills';
import Resume from './components/navigation/Resume';
import Contact from './components/navigation/Contact';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
