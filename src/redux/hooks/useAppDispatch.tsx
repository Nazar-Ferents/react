import {useDispatch} from "react-redux";
import type {storeJSON} from "../storeJSON.ts";


export const useAppDispatch = useDispatch.withTypes<typeof storeJSON.dispatch>()