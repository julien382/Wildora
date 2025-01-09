import './MainPage.scss'
import mainImage from '../../assets/img/rando.jpg';

const MainPage = () => {

    return (
        <div>
            <section className='topMainPageContainer'>
                <img className='topMainPageImage' src={mainImage} alt="mainImage"></img>
                <h1 className='topMainPageTitle'>Bienvenue chez Wildora : L’Évasion au Cœur de la Nature Sauvage</h1>
            </section>

            <section className='midMainPageContainer'>
                <p className='midMainPageTitle'>Chez Wildora, nous vous offrons des expériences immersives au cœur de la nature, que ce soit à travers des balades guidées, des séjours en pleine nature ou des activités en extérieur. Nous croyons que la véritable évasion se trouve dans la simplicité et la beauté brute de notre environnement naturel. Nos services sont conçus pour vous permettre de vous reconnecter à l’essentiel, en explorant des paysages préservés et en vivant des moments authentiques, loin du tumulte quotidien.</p>
            </section>
        </div>
    )
}

export default MainPage