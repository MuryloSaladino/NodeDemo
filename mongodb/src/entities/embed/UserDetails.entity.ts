import { Column } from "typeorm";

export default class UserDetails {

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    public constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}