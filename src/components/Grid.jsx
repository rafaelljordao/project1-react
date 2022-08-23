import { Cards } from "./Card";
import { But } from "./Button";
import axios from 'axios';
import { useState, useEffect } from 'react'
import './css/grid.css'


function Grid() {

    const [cardInfo, setCardInfo] = useState([]);
    const [newUrl, setNewUrl] = useState("")

    
    useEffect(() => {
        
        axios.get("http://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
        .then((response) =>{
            setCardInfo([...response.data.products])
            setNewUrl(response.data.nextPage);
        })
        .catch(function(error){
            console.log(error)
        });
    }, [])
    
    const loadMore = () => {
        axios.get(`http://${newUrl}`)
        .then((response) => {
            setCardInfo([...cardInfo, ...response.data.products])
            setNewUrl(response.data.nextPage);
        }) 
        
        .catch(function(error){
            console.log(error)
        });
    }

    return (
        <div>
            <div className="gridTitle">
                <h2>Sua seleção especial</h2> 
            </div>
            <div className="container">
            {cardInfo.map((card) => (
                <Cards
                    key={card.id}
                    image={card.image}
                    title={card.name}
                    description={card.description}
                    oldPrice={card.oldPrice}
                    price={card.price}
                    installmentsCount={card.installments.count}
                    installmentsValue={card.installments.value}
                />
            ))}
            </div>
            <div className="gridDivButt">
                {/* <But className="gridButt" onClick={loadMore} txt="Ainda mais produtos aqui!" /> */}
                <button className="gridButt" onClick={loadMore}>Ainda mais produtos aqui!</button>
            </div>
            <div className="gridTitle">
                <h2>Compartilhe a novidade</h2> 
            </div>
        </div>
    )
}

export default Grid