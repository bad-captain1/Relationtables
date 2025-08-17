import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post(":id")
  create(@Param('id') id: string,  @Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto , +id);
  }

  @Get()
  findAll() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.getAllPostsByUserId(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postService.getAllPostsByUserId(+id)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(+id);
  // }
}
