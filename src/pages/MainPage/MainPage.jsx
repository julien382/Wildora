import './MainPage.scss'
import mainImage from '../../assets/img/rando.jpg';
import CardAboveTheFold from '../../components/CardAboveTheFold/CardAboveTheFold';

const MainPage = () => {

    return (
        <div>
            <CardAboveTheFold text={"Bienvenue chez Wildora : L’Évasion au Cœur de la Nature Sauvage"} />

            <section className='presentationMainPage'>
                <p className='presentationMainPageTitle'>Chez Wildora, nous vous offrons des expériences immersives au cœur de la nature, que ce soit à travers des balades guidées, des séjours en pleine nature ou des activités en extérieur. Nous croyons que la véritable évasion se trouve dans la simplicité et la beauté brute de notre environnement naturel. Nos services sont conçus pour vous permettre de vous reconnecter à l’essentiel, en explorant des paysages préservés et en vivant des moments authentiques, loin du tumulte quotidien.</p>
            </section>

            <section className='servicesMainPage'>
                <h1 className='servicesMainPageTitle'>Des aventures sur mesure pour les amoureux de la nature sauvage.</h1>
                <div className='servicesMainPageContainer'>
                    <div className='servicesMainPageCard'>
                        <img className='servicesImage' src={mainImage} alt="servicesImage"></img>
                        <h2 className='servicesMainPageCardTitle'>Balades en forêt</h2>
                        <p className='servicesMainPageCardText'>Partez à la découverte de la nature sauvage en compagnie de nos guides passionnés. Nos balades guidées sont l’occasion de découvrir des paysages préservés et de vivre des moments uniques en pleine nature.</p>
                        <button className='servicesMainPageCardButton'>En savoir plus</button>
                    </div>
                    <div className='servicesMainPageCard'>
                        <img className='servicesImage' src={mainImage} alt="servicesImage"></img>
                        <h2 className='servicesMainPageCardTitle'>Séjours en Pleine Nature</h2>
                        <p className='servicesMainPageCardText'>Vivez une expérience inoubliable en pleine nature, en séjournant dans des hébergements insolites et en participant à des activités en extérieur. Nos séjours en pleine nature sont conçus pour vous permettre de vous ressourcer et de vous reconnecter à l’essentiel.</p>
                        <button className='servicesMainPageCardButton'>En savoir plus</button>
                   </div>
                   <div className='servicesMainPageCard'>
                        <img className='servicesImage' src={mainImage} alt="servicesImage"></img>
                        <h2 className='servicesMainPageCardTitle'>Activités en plein air</h2>
                        <p className='servicesMainPageCardText'>Vivez des sensations fortes en participant à nos activités en plein air. Que ce soit de l’escalade, du canoë-kayak, de la randonnée ou du VTT, nos activités en extérieur sont conçues pour les amateurs</p>
                        <button className='servicesMainPageCardButton'>En savoir plus</button>
                   </div>
                </div>
            </section>

            <section className='galerieMainPage'>
                <img className='galerieMainPageImage' src={mainImage} alt="mainImage"></img>
                <h1 className='galerieMainPageTitle'>Découvrez la beauté de la nature à travers notre galerie de photos.</h1>
            </section>

        </div>
    )
}

export default MainPage