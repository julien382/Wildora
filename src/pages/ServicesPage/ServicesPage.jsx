import './ServicesPage.scss'
import mainImage from '../../assets/img/rando.jpg';

const ServicesPage = () => {
    return (
        <div>
            <section className='topServicesPage'>
                <img className='topServicesPageImage' src={mainImage} alt="mainImage"></img>
                <h1 className='topServicesPageTitle'>Vivez des moments uniques au cœur de la nature sauvage.</h1>
            </section>

            <section className='servicesPage'>
                <div className='typeServicesPage'>
                    <h2 className='typeServicesPageTitle'>Balades guidées en nature</h2>
                    <p className='typeServicesPageText'>Nos guides passionnés vous emmènent à la découverte des trésors cachés de la nature. Balades adaptées à tous les niveaux.</p>
                    
                    <div className='typeServicesPageCard'>
                        <img className='typeServicesPageImage' src={mainImage} alt="mainImage"></img>
                        <p className='typeServicesPageDuration'>Durée : 2h à 5h</p>
                        <p className='typeServicesPagePrice'>À partir de 30€</p>
                    </div>

                </div>

                <div className='typeServicesPage'>
                    <h2 className='typeServicesPageTitle'>Séjours en pleine nature</h2>
                    <p className='typeServicesPageText'>Séjournez dans des tentes, gîtes ou cabanes en pleine nature et vivez une expérience hors du temps.</p>
                    
                    <div className='typeServicesPageCard'>
                        <img className='typeServicesPageImage' src={mainImage} alt="mainImage"></img>
                        <p className='typeServicesPageDuration'>Durée : 2h à 5h</p>
                        <p className='typeServicesPagePrice'>À partir de 150€</p>
                    </div>

                </div>

                <div className='typeServicesPage'>
                    <h2 className='typeServicesPageTitle'>Ateliers et événements nature</h2>
                    <p className='typeServicesPageText'>Participez à des ateliers immersifs sur la photographie de paysages, l’observation des oiseaux ou encore la préparation de repas en pleine nature.</p>
                    
                    <div className='typeServicesPageCard'>
                        <img className='typeServicesPageImage' src={mainImage} alt="mainImage"></img>
                        <p className='typeServicesPageDuration'>Durée : 1h à 2h</p>
                        <p className='typeServicesPagePrice'>À partir de 40€</p>
                    </div>

                </div>

            </section>

        </div>
    )
}

export default ServicesPage