import type {HairDummy} from "./HairDummy.ts";
import type {AddressDummy} from "./AddressDummy.ts";
import type {BankDummy} from "./BankDummy.ts";
import type {CompanyDummy} from "./CompanyDummy.ts";

export interface IUserDummy {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairDummy;
  ip: string;
  address: AddressDummy;
  macAddress: string;
  university: string;
  bank: BankDummy;
  company: CompanyDummy;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

