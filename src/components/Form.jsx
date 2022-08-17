

export const Forms = () => {
    return (
        <form className="form">

            <div>
                <h3>
                    Ajude o algorítimo a ser mais certeiro
                </h3>
                <p>um texto qualquer 1</p>
                <p>um texto qualquer 2</p>
            </div>

            <div>
                <label for="name">Seu nome</label>
                <input type="text" name="name" placeholder="Digite seu nome" />

                <label for="email">Seu E-mail</label>
                <input type="text" name="email" placeholder="Digite seu E-mail" />
                
                <label for="cpf">Seu CPF</label>
                <input type="text" name="cpf" placeholder="Digite seu CPF" />
                
                <label for="gender">Feminino</label>
                <input type="radio" value="feminino" name="gender" />
                
                <label for="gender">Masculino</label>
                <input type="radio" value="masculino" name="gender" />
            </div>
            
        </form>
    )
}