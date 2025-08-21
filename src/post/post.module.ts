import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { UserModule } from '../user/user.module';
import { Post } from './entities/post.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([Post, User])
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService]
})
export class PostModule {}