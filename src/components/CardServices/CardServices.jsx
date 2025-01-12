import './CardServices.scss'
import PropTypes from 'prop-types';

const CardServices = ({ image, duration, price }) => {

    return (
        <div className='CardServices'>
            <img className='CardServicesImage' src={image} alt="CardServices"></img>
            <p className='CardServicesDuration'>{duration}</p>
            <p className='CardServicesPrice'>{price}</p>
        </div>
    )
}

CardServices.propTypes = {
    image: PropTypes.string.isRequired,    // Le chemin de l'image doit être une chaîne de caractères et obligatoire
    duration: PropTypes.string.isRequired, // La durée doit être une chaîne de caractères et obligatoire
    price: PropTypes.oneOfType([           // Le prix peut être un nombre ou une chaîne
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default CardServices;