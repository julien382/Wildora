import './CardGalerie.scss'
import PropTypes from 'prop-types';

const CardGalerie = ({ image }) => {

    return (
        <div className='CardGalerie'>
            <img className='CardGalerieImage' src={image} alt="CardGalerie"></img>
        </div>
    )
}

CardGalerie.propTypes = {
    image: PropTypes.string.isRequired,    // Le chemin de l'image doit être une chaîne de caractères et obligatoire
};

export default CardGalerie;