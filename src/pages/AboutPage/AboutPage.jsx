import './AboutPage.scss'
import mainImage from '../../assets/img/rando.jpg';
import CardAboveTheFold from '../../components/CardAboveTheFold/CardAboveTheFold';

const AboutPage = () => {
    return (
        <div>
            <CardAboveTheFold text={"Notre but : vous proposer des expériences immersives au cœur de la nature"} />

            <section className='descriptionAboutPage'>
                <img className='descriptionAboutPageImage' src={mainImage} alt="mainImage"></img>
                <h1 className='descriptionAboutPageTitle'>L’Évasion dans sa Forme la Plus Pure</h1>
                <p className='descriptionAboutPageText'>{`Chez Wildora, nous nous inspirons de la nature dans son état brut. Le nom Wildora combine deux concepts puissants : 'Wild' (sauvage) et 'Ora' (l'instant, l'époque). Nous croyons que la nature, dans sa forme la plus pure, offre une expérience intemporelle, capable de nous reconnecter à l’essentiel. Nous vous invitons à explorer des paysages préservés, à vivre des moments authentiques, loin du quotidien, et à découvrir un monde où la beauté brute de la nature se dévoile à chaque pas.`}</p>
            </section>

            <section className='equipeAboutPage'>
                <h1 className='equipeAboutPageTitle'>Notre équipe</h1>
                    <p className='equipeAboutPageText'>Notre équipe est composée de passionnés qui partagent une vision commune : offrir des aventures enrichissantes, respectueuses de l’environnement et immergées dans la nature sauvage.</p>
                <div className='equipeAboutPageCard'>
                    <img className='equipeAboutPageImage' src={mainImage} alt="mainImage"></img>
                    <p className='equipeAboutPageName'>Julien</p>
                </div>
                <div className='equipeAboutPageCard'>
                    <img className='equipeAboutPageImage' src={mainImage} alt="mainImage"></img>
                    <p className='equipeAboutPageName'>Dylan</p>
                </div>
            </section>

            <section className='valeursAboutPage'>
                <h1 className='valeursAboutPageTitle'>Nos valeurs</h1>
                <div className='valeursAboutPageCard'>
                    <img className='valeursAboutPageImage' src={mainImage} alt="mainImage"></img>
                    <h2 className='valeursAboutPageTitle'>Authenticité </h2>
                    <p className='valeursAboutPageText'>Nous vous offrons des expériences vraies, sans artifice, au plus près de la nature.</p>
                </div>
                <div className='valeursAboutPageCard'>
                    <img className='valeursAboutPageImage' src={mainImage} alt="mainImage"></img>
                    <h2 className='valeursAboutPageTitle'>Respect de la nature </h2>
                    <p className='valeursAboutPageText'>Nous sommes engagés dans une démarche de tourisme durable et responsable.</p>
                </div>
                <div className='valeursAboutPageCard'>
                    <img className='valeursAboutPageImage' src={mainImage} alt="mainImage"></img>
                    <h2 className='valeursAboutPageTitle'>Aventure intemporelle </h2>
                    <p className='valeursAboutPageText'>Chaque moment passé dans la nature est un instant précieux et inoubliable.</p>
                </div>
            </section>

            <section className='temoignagesAboutPage'>
                <h1 className='temoignagesAboutPageTitle'>Ce qu’ils disent de nous</h1>
                <div className='temoignagesAboutPageCard'>
                    <img className='temoignagesAboutPageImage' src={mainImage} alt="mainImage"></img>
                    <div className='temoignagesAboutPageContainerText'>
                        <p className='temoignagesAboutPageText'>Une aventure incroyable avec Wildora ! Le cadre sauvage et préservé m’a permis de me reconnecter à la nature. Un moment inoubliable !</p>
                        <p className='temoignagesAboutPageAuthor'>Julien Hermain, client</p>
                    </div>
                </div>
            </section>

            <section className='faqAboutPage'>
                <h1 className='faqAboutPageTitle'>Questions Fréquentes</h1>
                <div className='faqAboutPageTitleContainer'>
                    <div className='faqAboutPageCard'>
                        <h2 className='faqAboutPageCardTitle'>Comment choisir une activité ?</h2>
                        <p className='faqAboutPageCardText'>Vous pouvez consulter notre catalogue d’activités en ligne</p>
                    </div>
                    <div className='faqAboutPageCard'>
                        <h2 className='faqAboutPageCardTitle'>Quel équipement dois-je apporter pour une balade ?</h2>
                        <p className='faqAboutPageCardText'>{`Nous fournissons les équipements essentiels, mais il est recommandé de porter des chaussures de randonnée et d'apporter de l'eau.`}</p>
                    </div>
                    <div className='faqAboutPageCard'>
                        <h2 className='faqAboutPageCardTitle'>Quels niveaux de difficulté pour les balades ?</h2>
                        <p className='faqAboutPageCardText'>Nos balades sont adaptées à tous les niveaux, des promenades faciles aux randonnées plus difficiles.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutPage