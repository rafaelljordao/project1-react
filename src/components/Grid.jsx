import { Cards } from "./Card";
import { But } from "./Button";

export const Grid = () => {
    return (
        <div className="grid">
            <Cards />
            <But txt="Ainda mais produtos aqui!" />
        </div>
    )
}