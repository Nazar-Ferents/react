import {useEffect, useState} from "react";
import type {ICar} from "../../modules/ICar.ts";
import {getCars} from "../../services/service.tsx";
import CarComponent from "./CarComponent.tsx";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {

        getCars()
            .then(res => setCars(res))
    })
    return (
        <div className='container'>
            <h1 className='page-title'>Cars</h1>
            <div className='table'>
                {
                    cars.map((car) => (<CarComponent key={car.id} car={car} />))
                }
            </div>

        </div>
    );
};

export default CarsComponent;