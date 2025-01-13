import './CardsServicesContainer.scss';
import mainImage from '../../assets/img/rando.jpg';
import CardServices from '../CardServices/CardServices';
import PropTypes from 'prop-types';

const CardsServicesContainer = ({ title, text }) => {
    return (
        <div className='CardsServicesContainer'>
            <h2 className='CardsServicesContainerTitle'>{title}</h2>
            <p className='CardsServicesContainerText'>{text}</p>
            <div className='CardsServicesWrapper'>
                <CardServices image={mainImage} duration={"Durée : 2h à 5h"} price={"À partir de 30€"} />
                <CardServices image={mainImage} duration={"Durée : 2h à 5h"} price={"À partir de 30€"} />
                <CardServices image={mainImage} duration={"Durée : 2h à 5h"} price={"À partir de 30€"} />
                <CardServices image={mainImage} duration={"Durée : 2h à 5h"} price={"À partir de 30€"} />
                <CardServices image={mainImage} duration={"Durée : 2h à 5h"} price={"À partir de 30€"} />
                <CardServices image={mainImage} duration={"Durée : 2h à 5h"} price={"À partir de 30€"} />
            </div>
        </div>
    );
};

CardsServicesContainer.propTypes = {
    title: PropTypes.string.isRequired, // Le titre doit être une chaîne de caractères et obligatoire
    text: PropTypes.string.isRequired,  // Le texte doit être une chaîne de caractères et obligatoire
};

export default CardsServicesContainer;