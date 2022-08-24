import Home from './Components/Home/Home';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import UserAccount from './Components/UserAccount/UserAccount';
import Layouts from './Layouts/Layouts';
import FullType from './Components/FullType/FullType';
import 'normalize.css';
import PokemonCard from './Components/PokemonCard/PokemonCard';

function App() {
  return (
    <div className="container-page">
        <Routes>
          <Route path='/' element={<Layouts />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact/>} />
            <Route path='userAccount' element={<UserAccount/>} />
            <Route path='/:typeName/:id' element={<FullType/>}/>
            <Route path='/:typeName/:id/pokemon/:id' element={<PokemonCard/>}/>
            <Route path='pokemon/:id' element={<PokemonCard/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
   