import { KeyValue } from "@angular/common";
import { ValueAccessor } from "@ionic/angular/directives/control-value-accessors/value-accessor";

export interface User{
    name: string,
    firstname: string,
    tel: string,
    email: string,
    role: string,
    status: string,
    password: string,
    account: string

}

export interface Agent{
    name: string,
    firstname: string,
    tel: string,
    email: string,
    role: "AGENT",
    matricule: number,
    password: string
    account: string
}

export interface Admin{
    name: string,
    firstname: string,
    tel: string,
    email: string,
    role: "ADMIN",
    matricule: number,
    password: string,
    account: string
}

export class Student {
    id: number;
    name: string;
    age: string;
    address: string;
 }