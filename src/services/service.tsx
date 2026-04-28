import axios from "axios";
import type {ICar} from "../modules/ICar.ts";


const axiosService = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
})

export const getCars = async ():Promise<ICar[]> => {

    const {data} = await axiosService.get('/cars');

    return data
}

export const saveCar = async (car: ICar):Promise<ICar> => {
    const {data} = await axiosService.post('/cars', car);
    return data
}