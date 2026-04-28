import type {FC} from "react";
import type {ICar} from "../../modules/ICar.ts";

type CarComponentType = {
    car: ICar
}
const CarComponent:FC<CarComponentType> = ({car}) => {
    return (
        <div className='card'>
            <h2>{car.brand}</h2>
            <p>Year: {car.year}</p>
            <p>Car ID: {car.id}</p>
            <p>Price: {car.price}</p>
        </div>
    );
};

export default CarComponent;