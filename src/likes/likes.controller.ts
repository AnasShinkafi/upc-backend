import { Body, Controller, Param, Post } from '@nestjs/common';
import { LikesService } from './likes.service';
import { likeDto } from './dto/likeDto';

@Controller('likes')
export class LikesController {

    constructor(private readonly likeService: LikesService){}

    @Post(':id')
    createComment(@Param('id') id:number,@Body('user_id') user_id: string){
        return this.likeService.creatComment(id, user_id)
    }
}