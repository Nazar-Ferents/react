import type {CoordinatesDummy} from "./CoordinatesDummy.ts";

export interface AddressDummy {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: CoordinatesDummy;
    country: string;
}