import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Base} from "../../common/base.entity";
import {User} from "../../user/entities/user.entity";

@Entity()
export class Post extends Base{

    @Column()
    post:String


    @ManyToOne(()=>User , (user)=>user.posts)
    user:User

}
