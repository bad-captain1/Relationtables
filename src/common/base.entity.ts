import {Column, PrimaryGeneratedColumn} from "typeorm";

const  date =new Date()
export abstract class Base {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            default: date,
        }
    )
    createdAt: Date;

    // @Column(
    //     {
    //         default: new Date(),
    //     }
    // )
    // updatedAt: Date;
}


