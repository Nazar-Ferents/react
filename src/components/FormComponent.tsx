import {useForm} from "react-hook-form";


interface IFormProps {
    username:string,
    password:string,
    age:number
}

const FormComponent = () => {


    const {
        handleSubmit,
        register,
        formState:{errors,isValid}
    } = useForm<IFormProps>({
        mode:'all'
    });

        const customHandler = (formDataProps:IFormProps) => {
        console.log(formDataProps);
        }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('username',{
                        required:true,
                        pattern:{
                            value:/\w+/,
                            message:'wrong name'
                        },
                        minLength:{
                            value:1,
                            message:'wrong name'
                        }

                    })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <input type="text" {...register('password',{
                    required:true,
                    minLength:{value:3, message:'wrong password'},
                    maxLength:{value:10, message:'wrong password'}
                })}/>
                <input type="number" {...register('age',{
                    required:true,
                    valueAsNumber:true,
                    min:{value:1,message:'age too small'},
                    max:{value:108,message:'age too big'}
                })}/>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;