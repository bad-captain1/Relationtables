import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.getAllPosts();
  }

  @Get('user/:userId/post/:postId')
  async getUserPost(
      @Param('userId') userId: number,
      @Param('postId') postId: number,
  ) {
    return this.postService.findUserPostById(userId, postId)
  }
}
