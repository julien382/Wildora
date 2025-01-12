import './GaleriePage.scss'
import mainImage from '../../assets/img/rando.jpg';
import CardAboveTheFold from '../../components/CardAboveTheFold/CardAboveTheFold';

const GaleriePage = () => {
    return (
        <div>
            <CardAboveTheFold text={"Nos moments inoubliables en images"} />

            <section className='galeriePage'>
                <div className='galeriePageCard'>
                    <img className='galeriePageImage' src={mainImage} alt="mainImage"></img>
                </div>

                <div className='galeriePageCard'>
                    <img className='galeriePageImage' src={mainImage} alt="mainImage"></img>
                </div>

                <div className='galeriePageCard'>
                    <img className='galeriePageImage' src={mainImage} alt="mainImage"></img>
                </div>

                <div className='galeriePageCard'>
                    <img className='galeriePageImage' src={mainImage} alt="mainImage"></img>
                </div>

                <div className='galeriePageCard'>
                    <img className='galeriePageImage' src={mainImage} alt="mainImage"></img>
                </div>

                <div className='galeriePageCard'>
                    <img className='galeriePageImage' src={mainImage} alt="mainImage"></img>
                </div>

            </section>

        </div>
    )
}

export default GaleriePage