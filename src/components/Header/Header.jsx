import { useState, useEffect } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Hook pour détecter le défilement
    useEffect(() => {
        const handleScroll = () => {
            // Si l'utilisateur fait défiler vers le bas, on cache le header
            if (window.scrollY > lastScrollY) {
                setShowHeader(false); // Scroll vers le bas
            } else {
                setShowHeader(true); // Scroll vers le haut
            }
            setLastScrollY(window.scrollY); // Mettre à jour la position du dernier défilement
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'événement lors du démontage du composant
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={showHeader ? 'header-visible' : 'header-hidden'}>
            <Link to="/">
                <h1 className='linkHeader'>Wildora</h1>
            </Link>
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
    );
}

export default Header;
