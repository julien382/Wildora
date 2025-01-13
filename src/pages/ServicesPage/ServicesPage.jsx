import './ServicesPage.scss'
import CardAboveTheFold from '../../components/CardAboveTheFold/CardAboveTheFold';
import CardsServicesContainer from '../../components/CardsServicesContainer/CardsServicesContainer';

const ServicesPage = () => {
    return (
        <div>
            <CardAboveTheFold text={"Vivez des moments uniques au cœur de la nature sauvage."} />

            <section className='servicesPage'>
                <CardsServicesContainer title={"Balades guidées en nature"} text={"Nos guides passionnés vous emmènent à la découverte des trésors cachés de la nature. Balades adaptées à tous les niveaux."} />
                <CardsServicesContainer title={"Séjours en pleine nature"} text={"Séjournez dans des tentes, gîtes ou cabanes en pleine nature et vivez une expérience hors du temps."} />
                <CardsServicesContainer title={"Ateliers et événements nature"} text={"Participez à des ateliers immersifs sur la photographie de paysages, l’observation des oiseaux ou encore la préparation de repas en pleine nature."} />

            </section>

        </div>
    )
}

export default ServicesPage