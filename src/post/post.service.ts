import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPosts() {
    const posts = await this.prisma.post.findMany({
      where: {
        userId: '7e9069f7-4655-4404-8c63-a80bcb3a29d6',
      },
      select: {
        title: true,
        id: true,
        description: true,
        user: {
          select: {
            id: true,
            name: true,  // Select the 'name' field of the associated user
            email: true, // Select the 'email' field of the associated user
          },
        },
      },
    });

    return posts;
  }
  async createPost(payload: any) {
    const newPost = await this.prisma.post.create({
      data: payload,
    });
    return newPost;
  }
}


