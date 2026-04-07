import type {ICar} from "../../../modules/Cars/ICar.ts";
import {useEffect, useState} from "react";
import {getAllCars} from "../../../services/serviceApi.ts";
import CarComponent from "../CarComponent/CarComponent.tsx";
import './CarsComponent.css'

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
        getAllCars()
            .then(value => setCars(value))
    },[])
    return (
        <div className='table'>
            {
                cars.map(car => (<CarComponent key={car.id} car={car} />))
            }
        </div>
    );
};

export default CarsComponent;