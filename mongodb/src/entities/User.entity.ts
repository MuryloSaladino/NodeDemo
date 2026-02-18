import { BeforeInsert, Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";
import UserDetails from "./embed/UserDetails.entity";
import { hashSync } from "bcryptjs";

@Entity()
export default class User {

    @ObjectIdColumn()
    id: ObjectId;
    
    @Column()
    username: string;

    @Column()
    password: string;

    @Column(_ => UserDetails)
    details: UserDetails;

    @BeforeInsert()
    cryptPassword() {
        this.password = hashSync(this.password);
    }
}