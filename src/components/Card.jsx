import { But } from './Button';

export const Cards = (props) => {
    return (
        <div className="card">
            
            <img className='image' width="120px" height="120px" src={props.image}/>
            <h3 className='title'>{props.title}</h3>
            <p className='description'>{props.description}</p>
            <p className='oldPrice'>De: R${props.oldPrice.toFixed(2).replace('.',',')}</p>    
            <strong className='price'>Por: R${props.price.toFixed(2).replace('.',',')}</strong>
            <p className='price2x'>ou {props.installmentsCount}x de R${props.installmentsValue.toFixed(2).replace('.',',')}</p>

            <But txt="Comprar" />
        </div>
    );
}