import type {FC} from "react";
import type {ICar} from "../../../modules/Cars/ICar.ts";
import './CarComponent.css'

type CarComponentType = {
    car:ICar
}
const CarComponent:FC<CarComponentType> = ({car}) => {
    return (
        <div className='cell'>
            <h2>{car.brand} - {car.id}</h2>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
        </div>
    );
};

export default CarComponent;