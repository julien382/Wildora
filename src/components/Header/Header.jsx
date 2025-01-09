import './Header.scss'

import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <h1 className='logoHeader'>Wildora</h1>
            <nav>
                <Link to="/">
                    <h1 className='linkHeader'>Accueil</h1>
                </Link>
                <Link to="/A_Propos">
                    <h1 className='linkHeader'>A Propos</h1>
                </Link>
                <Link to="/Services">
                    <h1 className='linkHeader'>Services</h1>
                </Link>
                <Link to="/Galerie">
                    <h1 className='linkHeader'>Galerie</h1>
                </Link>
                <Link to="/Contact">
                    <h1 className='linkHeader'>Contact</h1>
                </Link>
            </nav>
        </header>
    )
}

export default Header