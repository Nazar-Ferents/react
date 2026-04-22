import {useSelector} from "react-redux";
import type {storeJSON} from "../storeJSON.ts";


export const useAppSelector = useSelector.withTypes<ReturnType<typeof storeJSON.getState>>()