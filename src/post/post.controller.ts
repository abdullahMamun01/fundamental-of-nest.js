import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { Public } from 'src/decorator/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService , private readonly cloudinaryService: CloudinaryService) {}

  @Public()
  @Get()
  getAllPost() {
    return this.postService.getAllPosts();
  }

  @Public()
  @Post()
  @UseInterceptors(FileInterceptor('file'))
 async createPost(@UploadedFile() file: Express.Multer.File) {
    console.log(file , 'from create post')
    const upload = await this.cloudinaryService.uploadImage(file)
    return upload.secure_url
  }
}
