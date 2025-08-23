import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(dto: CreatePostDto): Promise<Post> {

    if (!dto.userId) {
      throw new BadRequestException('userId is required');
    }

    const user = await this.userRepository.findOne({ where: { id: dto.userId } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const post = await this.postRepository.create(dto);
    return post;
  }

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.find({ relations: ['user'] });
  }

 // async getPostByUser(userId: number, postId: number): Promise<Post> {
  //  const post = await this.postRepository.findOne({
  //    where: { id: postId, user: { id: userId } },
  //    relations: ['user'],
  //  });
  //  if (!post) throw new Error('Post not found');
  //  return post;
  //}


  async findUserPostById(userId: number, postId: number): Promise<Post[]> {
    return this.postRepository.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }
}
