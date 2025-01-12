import './GaleriePage.scss'
import mainImage from '../../assets/img/rando.jpg';

const GaleriePage = () => {
    return (
        <div>
            <section className='topGaleriePage'>
                <img className='topGaleriePageImage' src={mainImage} alt="mainImage"></img>
                <h1 className='topGaleriePageTitle'>Nos moments inoubliables en images</h1>
            </section>

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