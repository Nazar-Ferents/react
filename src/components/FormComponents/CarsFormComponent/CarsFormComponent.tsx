import {useForm} from "react-hook-form";
import type {ICar} from "../../../modules/Cars/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsValidator} from "../../../validators/CarsValidator.tsx";
import {saveCars} from "../../../services/serviceApi.ts";
import './CarsFormComponent.css'


const CarsFormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<ICar>({mode: 'all',resolver:joiResolver(carsValidator)})

    const customHandler = (formData: ICar) => {
            saveCars(formData)
                .then(value => console.log(value));
    }


    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>

                <label>
                    <input type="text" {...register("brand")} placeholder={'brand'}/>
                    {errors.brand && <p>{errors.brand.message}</p>}
                </label>
                <label>
                    <input type="number" {...register("price")} placeholder={'price'}/>
                    {errors.price && <p>{errors.price.message}</p>}
                </label>
                <label>
                    <input type="number" {...register("year")} placeholder={'year'}/>
                    {errors.year && <p>{errors.year.message}</p>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>

        </div>
    );
};

export default CarsFormComponent;