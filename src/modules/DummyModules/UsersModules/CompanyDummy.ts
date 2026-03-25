import type {AddressDummy} from "./AddressDummy.ts";

export interface CompanyDummy {
    department: string;
    name: string;
    title: string;
    address: AddressDummy;
}