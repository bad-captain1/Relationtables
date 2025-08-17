import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  post: string;

  @IsOptional()
  userId?: number; 
}