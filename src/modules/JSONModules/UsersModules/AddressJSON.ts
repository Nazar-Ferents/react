import type {GeoJSON} from "./GeoJSON.ts";

export interface AddressJSON {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoJSON;
}