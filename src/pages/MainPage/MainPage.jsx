import './MainPage.scss'
import mainImage from '../../assets/img/rando.jpg';
import CardAboveTheFold from '../../components/CardAboveTheFold/CardAboveTheFold';
import { Link } from "react-router-dom";

const MainPage = () => {
    const cardData = [
        {
          title: "Balades en forêt",
          description: "Partez à la découverte de la nature sauvage en compagnie de nos guides passionnés. Nos balades guidées sont l’occasion de découvrir des paysages préservés et de vivre des moments uniques en pleine nature.",
          image: mainImage
        },
        {
          title: "Séjours en Pleine Nature",
          description: "Vivez une expérience inoubliable en pleine nature, en séjournant dans des hébergements insolites et en participant à des activités en extérieur. Nos séjours en pleine nature sont conçus pour vous permettre de vous ressourcer et de vous reconnecter à l’essentiel.",
          image: mainImage
        },
        {
          title: "Activités en plein air",
          description: "Vivez des sensations fortes en participant à nos activités en plein air. Que ce soit de l’escalade, du canoë-kayak, de la randonnée ou du VTT, nos activités en extérieur sont conçues pour les amateurs.",
          image: mainImage
        }
      ];

    return (
        <div>
            <CardAboveTheFold text={"Bienvenue chez Wildora : L’Évasion au Cœur de la Nature Sauvage"} />

            <section className='presentationMainPage'>
                <p className='presentationMainPageTitle'><span className='highlight'>Chez Wildora,</span> nous vous offrons des expériences immersives au cœur de la nature, que ce soit à travers des balades guidées, des séjours en pleine nature ou des activités en extérieur. Nous croyons que la véritable évasion se trouve dans la simplicité et la beauté brute de notre environnement naturel. Nos services sont conçus pour vous permettre de vous reconnecter à l’essentiel, en explorant des paysages préservés et en vivant des moments authentiques, loin du tumulte quotidien.</p>
            </section>

            <section className='servicesMainPage'>
                <h1 className='servicesMainPageTitle'>Des aventures sur mesure pour les amoureux de la nature sauvage.</h1>
                <div className="cards-container">
                    {cardData.map((card, index) => (
                        <div className="card" key={index}>
                            <img src={card.image} alt={card.title} className="card-image" />
                            <h3 className="card-title">{card.title}</h3>
                            <div className="card-underline"></div>
                            <p className="card-description">{card.description}</p>
                            <button className='card-button'>En savoir plus</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className='galerieMainPage'>
                <Link to="/Galerie">
                    <img className='galerieMainPageImage' src={mainImage} alt="mainImage"></img>
                    <h1 className='galerieMainPageTitle'>Découvrez la beauté de la nature à travers notre galerie de photos.</h1>
                </Link>
            </section>

        </div>
    )
}

export default MainPage