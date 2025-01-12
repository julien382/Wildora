import './ServicesPage.scss'
import mainImage from '../../assets/img/rando.jpg';
import CardAboveTheFold from '../../components/CardAboveTheFold/CardAboveTheFold';
import CardServices from '../../components/CardServices/CardServices';

const ServicesPage = () => {
    return (
        <div>
            <CardAboveTheFold text={"Vivez des moments uniques au cœur de la nature sauvage."} />

            <section className='servicesPage'>
                <div className='typeServicesPage'>
                    <h2 className='typeServicesPageTitle'>Balades guidées en nature</h2>
                    <p className='typeServicesPageText'>Nos guides passionnés vous emmènent à la découverte des trésors cachés de la nature. Balades adaptées à tous les niveaux.</p>
                    
                    <CardServices  image={mainImage} duration={"Durée : 2h à 5h"} price={"À partir de 30€"} />

                </div>

                <div className='typeServicesPage'>
                    <h2 className='typeServicesPageTitle'>Séjours en pleine nature</h2>
                    <p className='typeServicesPageText'>Séjournez dans des tentes, gîtes ou cabanes en pleine nature et vivez une expérience hors du temps.</p>
                    
                    <CardServices  image={mainImage} duration={"Séjours : 2 à 5 jours"} price={"À partir de 150€"} />

                </div>

                <div className='typeServicesPage'>
                    <h2 className='typeServicesPageTitle'>Ateliers et événements nature</h2>
                    <p className='typeServicesPageText'>Participez à des ateliers immersifs sur la photographie de paysages, l’observation des oiseaux ou encore la préparation de repas en pleine nature.</p>
                    
                    <CardServices  image={mainImage} duration={"Durée : 1h à 2h"} price={"À partir de 40€"} />

                </div>

            </section>

        </div>
    )
}

export default ServicesPage