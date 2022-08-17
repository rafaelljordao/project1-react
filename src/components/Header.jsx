import { But } from "./Button"
import './css/header.css'
// import './css/button.css'

export const Head = () => {
    return(
      <header>
        <p className="header-text-top">uma seleção de produtos</p>
        <h1 className="header-title">especial para você</h1>
        <p className="header-text-bottom">todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</p>
      
        <div className="butts">
            <But txt="Conheça a Linx"/>
            <But txt="Ajude o algorítimo"/>
            <But txt="Seus produtos"/>
            <But txt="Compartilhe"/>
        </div>
      </header>
    )
}