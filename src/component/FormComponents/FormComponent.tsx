import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {ValidatorCars} from "../../validations/validatorCars.ts";
import {saveCar} from "../../services/service.tsx";
import type {ICar} from "../../modules/ICar.ts";


const FormComponent = () => {

    const {handleSubmit, register,formState:{errors,isValid}} = useForm<ICar>({mode:'all',resolver:joiResolver(ValidatorCars)});

    const customHandler = (formData: ICar) => {
        saveCar(formData)
            .then(value => console.log(value))
    }
    return (
        <div className='container'>
            <h1 className="page-title">Add Car</h1>
            <form onSubmit={handleSubmit(customHandler)} className='form'>
                <div className='form-group'>
                    <label>Brand
                    </label>
                    <input type="text" {...register('brand')} placeholder={'brand'} />
                    {errors.brand && <div>{errors.brand.message}</div>}
                </div>
                <div className='form-group'>
                    <label>Price
                    </label>
                    <input type="number" {...register('price')} placeholder={'price'} />
                    {errors.price && <div>{errors.price.message}</div>}
                </div>
                <div className='form-group'>
                    <label>Year</label>
                    <input type="number" {...register('year')} placeholder={'year'} />
                    {errors.year && <div>{errors.year.message}</div>}
                </div>


                <button disabled={!isValid}>send</button>
            </form>
            
            </div>
    );
};

export default FormComponent;