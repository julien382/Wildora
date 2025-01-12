import './GaleriePage.scss'
import mainImage from '../../assets/img/rando.jpg';
import CardAboveTheFold from '../../components/CardAboveTheFold/CardAboveTheFold';
import CardGalerie from '../../components/CardGalerie/CardGalerie';

const GaleriePage = () => {
    return (
        <div>
            <CardAboveTheFold text={"Nos moments inoubliables en images"} />

            <section className='galeriePage'>
                <CardGalerie image={mainImage} />
                <CardGalerie image={mainImage} />
                <CardGalerie image={mainImage} />
                <CardGalerie image={mainImage} />
                <CardGalerie image={mainImage} />
                <CardGalerie image={mainImage} />
                <CardGalerie image={mainImage} />
                <CardGalerie image={mainImage} />
                <CardGalerie image={mainImage} />

            </section>

        </div>
    )
}

export default GaleriePage