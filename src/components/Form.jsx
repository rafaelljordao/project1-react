import './css/form.css'
import { But } from "./Button"

export const Forms = () => {
    return (
        <form className="form">

            <div className='formTxt'>
                <h3>
                    Ajude o algorítimo a ser mais certeiro
                </h3>
                <p>um texto qualquer 1 - precisa ficar mais longo do que está agora</p>
                <p>um texto qualquer 2 - para dar a impressão de pagágrafo</p>
            </div>

            <div className='formBox'>
                <label htmlFor="name">Seu nome:</label>
                <input type="text" className='inputBox' name="name" placeholder="Digite seu nome" />

                <label htmlFor="email">E-mail:</label>
                <input type="text" className='inputBox' name="email" placeholder="Digite seu E-mail" />

                <label htmlFor="cpf">CPF:</label>
                <input type="text" className='inputBox' name="cpf" placeholder="Digite seu CPF" />

                <div>
                    <input type="radio" name="gender" />
                    <label htmlFor="gender" className='lblRadio'>Masculino</label>

                    <input type="radio" name="gender" />
                    <label htmlFor="gender" className='inputRadio'>Feminino</label>
                </div>

                <But txt="Enviar"/>

            </div>

            
        </form>
    )
}

