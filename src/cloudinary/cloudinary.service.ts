import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import streamifier from  'streamifier';


import cloudinary from './cloudinary.config';
@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File) : Promise<UploadApiResponse | UploadApiErrorResponse>  {
    return new Promise((resolve,reject) => {
        const upload = cloudinary.uploader.upload_stream((err , result)=> {
            if(err) reject(err)

            resolve(result)
        })
       return streamifier.createReadStream(file.buffer).pipe(upload)
    })
  }
}
