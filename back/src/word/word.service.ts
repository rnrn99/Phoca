import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as AWS from "aws-sdk";
import * as dotenv from "dotenv";
import { Repository } from "typeorm";
import { Word } from "./word.entity";
dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_BUCKET_REGION,
});

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word) private wordRepository: Repository<Word>,
  ) {}
  s3 = new AWS.S3();

  async uploadImage(file: Express.Multer.File) {
    const AWS_S3_BUCKET = process.env.AWS_BUCKET_NAME;
    const params = {
      Bucket: AWS_S3_BUCKET,
      Key: String(file.originalname),
      Body: file.buffer,
      ACL: "public-read",
    };
    try {
      const response = await this.s3.upload(params).promise();
      console.log(response);
      return response.Location;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteImage(key: string) {
    const response = await this.s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
      })
      .promise();
    console.log(response);
    return response;
  }
  catch(e) {
    console.log(e);
  }

  // async getAll(wordbookId: string) {
  //   return await this.wordRepository.find({ relations: { wordbook: true } });
  // }
}
