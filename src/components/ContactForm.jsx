import { But } from "./Button"
import './css/contactForm.css'

export const ContactForm = () => {
    return (
        <form className="formBox">
            <div className="contactForm">

                <div className="box">
                    <label htmlFor="name">Nome do seu amigo:</label>
                    <input type="text" className='inputBox' name="name" placeholder="Digite aqui..." />
                </div>

                <div className="box">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" className='inputBox' name="email" placeholder="Digite o E-mail..." />
                </div>
                
            </div>

            <But txt="Enviar agora" />

        </form>
    )
}