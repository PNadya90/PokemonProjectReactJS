import Home from './Home/Home';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import UserAccount from './UserAccount/UserAccount';
import Layouts from './Layouts';
import FullType from './FullType/FullType';
import 'normalize.css';
import PokemonCard from './PokemonCard/PokemonCard';

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
   