import { Printable } from "../utils/printable.js";
import { IsSame } from "../interfaces/sameObject.js";

export interface Object<T> extends Printable, IsSame<T>{
    
}