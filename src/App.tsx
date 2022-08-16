import Home from './Home/Home';
import './App.scss';
import NavArea from './Home/MainMenu/UI/NavArea';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import UserAccount from './UserAccount/UserAccount';

function App() {
  return (
    <div className="container-page">
      <header className='header-area'>
        <NavArea />
      </header>
      <main className='content-area'>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/userAccount' element={<UserAccount />} />
        </Routes>
      </main>
      <footer className='footer-area'></footer>
    </div>
  );
}

export default App;
