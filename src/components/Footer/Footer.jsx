import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerContent'>
                <div className='footerSection'>
                    <h2 className='footerTitle'>Wildora</h2>
                    <p className='footerText'>L’Évasion au Cœur de la Nature Sauvage</p>
                </div>
                <div className='footerSection'>
                    <h2 className='footerTitle'>Contact</h2>
                    <p className='footerText'>Adresse : 123 Rue de la Nature, 75000 Paris, France</p>
                    <p className='footerText'>Téléphone : +33 1 23 45 67 89</p>
                    <p className='footerText'>Email : contact@wildora.com</p>
                </div>
                <div className='footerSection'>
                    <h2 className='footerTitle'>Suivez-nous</h2>
                    <div className='footerSocialLinks'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className='footerBottom'>
                <p className='footerBottomText'>&copy; 2023 Wildora. Tous droits réservés.</p>
            </div>
        </footer>
    )
}

export default Footer