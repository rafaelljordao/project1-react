import { But } from "./Button"
import './css/header.css'

export const Head = () => {
    return(
      <header>
        <p class="header-text-top">uma seleção de produtos</p>
        <h1 class="header-title">especial para você</h1>
        <p class="header-text-bottom">todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</p>
      
        <div class="butts">
            <But txt="Conheça a Linx"/>
            <But txt="Ajude o algorítimo"/>
            <But txt="Seus produtos"/>
            <But txt="Compartilhe"/> 
        </div>
      </header>
    )
}