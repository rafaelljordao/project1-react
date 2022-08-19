import { But } from './Button';
import axios from 'axios';

function sendData(name, image, title, oldPrice, price, description, installments){
    axios.post("colocar a url da API aqui", {
        name,
        image,
        title,
        oldPrice,
        price,
        description,
        installments
    })
    .then(function(response) {
        setInfo(response.data);
    })
    .catch(function(error){
        console.log(error)
    });
}

function showData(name, image, title, oldPrice, price, description, installments){
    axios.get("colocar a url da API aqui")
    .then(function(response) {
        setInfo(response.data);
    })
    .catch(function(e){
        console.log(e)
    });
}

export const Cards = (props) => {
    return (
        <div className="card">
            <img className='image' width="120px" height="120px" src={props.image}/>
            <h3 className='title'>{props.title}</h3>
            <p className='description'>{props.description}</p>
            <p className='oldPrice'>{props.oldPrice}</p>
            <p className='price'>{props.price}</p>
            <p className='price2x'>{props.price2x}</p>

            <But txt="Comprar" />
        </div>
    );
}