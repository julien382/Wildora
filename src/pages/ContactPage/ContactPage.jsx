import './ContactPage.scss'
import mainImage from '../../assets/img/rando.jpg';

const ContactPage = () => {
    return (
        <div>
            <section className='topContactPage'>
                <img className='topContactPageImage' src={mainImage} alt="mainImage"></img>
                <h1 className='topContactPageTitle'>Contactez-nous pour plus d’informations</h1>
            </section>

            <section className='contactFormSection'>
                <h2 className='contactFormTitle'>Formulaire de Contact</h2>
                <form className='contactForm'>
                    <label htmlFor='name'>Nom</label>
                    <input type='text' id='name' name='name' required />

                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' required />

                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' rows='5' required></textarea>

                    <button type='submit'>Envoyer</button>
                </form>
            </section>

            <section className='practicalInfoSection'>
                <h2 className='practicalInfoTitle'>Informations Pratiques</h2>
                <p className='practicalInfoText'>Adresse : 123 Rue de la Nature, 75000 Paris, France</p>
                <p className='practicalInfoText'>Téléphone : +33 1 23 45 67 89</p>
                <p className='practicalInfoText'>Email : contact@wildora.com</p>
                <p className='practicalInfoText'>Horaires : Lundi - Vendredi : 9h - 18h</p>
            </section>

            <section className='mapSection'>
                <h2 className='mapTitle'>Notre Localisation</h2>
                <div className='mapContainer'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.2922929999999997!3d48.858844999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdfdfdfdfdf%3A0x0!2zNDjCsDUxJzMyLjkiTiAywrAxNSc0Ni4yIkU!5e0!3m2!1sen!2sfr!4v1616161616161!5m2!1sen!2sfr"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                    ></iframe>
                </div>
            </section>
        </div>
    )
}

export default ContactPage