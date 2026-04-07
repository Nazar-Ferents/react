import axios from "axios";
import type {ICar} from "../modules/Cars/ICar.ts";


const axioCars = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'},
})

export const getAllCars = async ():Promise<ICar[]> => {
    const {data} = await axioCars.get<ICar[]>('/cars')
    console.log(data)

    return data

}


export const saveCars = async (car:ICar):Promise<ICar> => {
    const {data} = await axioCars.post<ICar>('/cars',car)
    return data
}