import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/entities/user.entity";
import {Post} from "./post/entities/post.entity";


@Module({
  imports: [UserModule, PostModule , TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'postgres',
    synchronize: false,
    logging: true,
    entities: [User , Post],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
