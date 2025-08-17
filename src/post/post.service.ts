import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(dto: CreatePostDto, userId: number): Promise<Post> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    const post = this.postRepository.create({ ...dto, user });
    return this.postRepository.save(post);
  }

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.find({ relations: ['user'] });
  }

  async getPostByUser(userId: number, postId: number): Promise<Post> {
    const post = await this.postRepository.findOne({
      where: { id: postId, user: { id: userId } },
      relations: ['user'],
    });
    if (!post) throw new Error('Post not found');
    return post;
  }


  async getAllPostsByUserId(userId: number): Promise<Post[]> {
    return this.postRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }
}
