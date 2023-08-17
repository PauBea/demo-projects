import './contact.css'

export default function Contact() {
    return (
        <>
            <h2 className='getIntoContact-title'>Kérdésed van? Lépj velünk kapcsolatba!</h2>
            <div className="contact-container">
                <div>
                    <h3 className='getIntoContact-subtitle'>Ügyfélszolgálat:</h3>
                    <ul className='getIntoContact-subtitle' id='contact-detailes'>
                        <li>Email: webshop@webshop.hu</li>
                        <li>Telefonszám: 06200000000</li>

                    </ul>
                </div>

                <form action="/form/submit" method="post">
                    <textarea name="textarea" rows="10" cols="50">Üzenet: </textarea>
                    <br/>
                    <button type="submit" className="submit-button">Elküldöm </button>
                </form>

            </div>

        </>
    );
}