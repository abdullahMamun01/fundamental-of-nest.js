import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  providers: [PostService , CloudinaryService],
  controllers: [PostController]
})
export class PostModule {}
