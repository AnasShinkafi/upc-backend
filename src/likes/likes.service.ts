import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from './entities/likes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LikesService {

    constructor(@InjectRepository(Like) private readonly liketRepo: Repository<Like>,){}

    async creatComment(news_id:number, user_id:string){
        const likeE = new Like()
        likeE.news_id = news_id;
        likeE.user_id = user_id;
            const exist = await this.liketRepo.find({where:
            {
                user_id:user_id,
                news_id:news_id,
            }, relations:['news']})

            
        if(exist.length ===0 ){
            const createC = await this.liketRepo.create(likeE);
            return this.liketRepo.save(createC); 
            
        }else{
           return await this.liketRepo.createQueryBuilder()
            .delete()
            .where( { user_id: user_id } )
            .andWhere({news_id:news_id})
            .execute();
        }
    }

    
}