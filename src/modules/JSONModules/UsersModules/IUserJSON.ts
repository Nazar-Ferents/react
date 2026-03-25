import type {AddressJSON} from "./AddressJSON.ts";
import type {CompanyJSON} from "./CompanyJSON.ts";


export interface IUserJSON {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressJSON;
  phone: string;
  website: string;
  company: CompanyJSON;
}