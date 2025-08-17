import {Column, Entity, OneToMany} from "typeorm";
import {Base} from "../../common/base.entity";
import {Post} from "../../post/entities/post.entity";

@Entity()
export class User extends Base{

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

   @Column()
    age: number;

   @Column()
    phone: string;

   @OneToMany(()=>Post, (post) => post.user)
    posts: Post[]


}
