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
                <label for="name">Seu nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" />

                <label for="email">E-mail:</label>
                <input type="text" name="email" placeholder="Digite seu E-mail" />
                
                <label for="cpf">CPF:</label>
                <input type="text" name="cpf" placeholder="Digite seu CPF" />
                
                <div>
                    <input type="radio" value="feminino" name="gender" />
                    <label for="gender">Feminino</label>
                
                    <input type="radio" value="masculino" name="gender" />
                    <label for="gender">Masculino</label>
                </div>

                <But txt="Enviar"/>
            
            </div>

            
        </form>
    )
}