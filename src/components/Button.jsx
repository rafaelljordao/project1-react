import './css/button.css'

export const But = (props) => {
    return (
        <button onClick={props.onClick} className="butt">{props.txt}</button>
    )
}   