import { Outlet } from 'react-router-dom';
import BannerArea from '../Components/MainManu/BannerArea';
import NavArea from '../Components/MainManu/NavArea'
import './Layouts.scss'

function Layouts() {
    return (
        <>
            <header className='header-area'>
                <NavArea />
                <BannerArea />
            </header>
            <main className='content-area'>
                <Outlet/>
            </main>
            <footer className='footer-area'></footer>
        </>
    )
}

export default Layouts
