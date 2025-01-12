import './CardAboveTheFold.scss'
import PropTypes from 'prop-types';
import mainImage from '../../assets/img/rando.jpg';

const CardAboveTheFold = ({ text }) => {

    return (
        <section className='CardAboveTheFold'>
            <img className='CardAboveTheFoldImage' src={mainImage} alt="AboveTheFold"></img>
            <h1 className='CardAboveTheFoldTitle'>{text}</h1>
        </section>

    )
}

CardAboveTheFold.propTypes = {
    text: PropTypes.string.isRequired, // Le texte est obligatoire et doit être une chaîne de caractères
};

export default CardAboveTheFold;