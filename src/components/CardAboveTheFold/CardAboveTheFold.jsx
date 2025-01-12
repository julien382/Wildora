import './CardAboveTheFold.scss'
import mainImage from '../../assets/img/rando.jpg';

const CardAboveTheFold = () => {

    return (
        <section className='CardAboveTheFold'>
            <img className='CardAboveTheFoldImage' src={mainImage} alt="AboveTheFold"></img>
            <h1 className='CardAboveTheFoldTitle'>Bienvenue chez Wildora : L’Évasion au Cœur de la Nature Sauvage</h1>
        </section>

    )
}

export default CardAboveTheFold