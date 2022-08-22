import Home from './Home/Home';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import UserAccount from './UserAccount/UserAccount';
import Layouts from './Layouts';


function App() {
  return (
    <div className="container-page">
        <Routes>
          <Route path='/' element={<Layouts />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact/>} />
            <Route path='userAccount' element={<UserAccount/>} />
            <Route path='pokemon:id' />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
