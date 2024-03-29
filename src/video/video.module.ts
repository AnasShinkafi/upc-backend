import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './entities/video.entity';

@Module({
  controllers: [VideoController],
  providers: [VideoService],
  imports: [TypeOrmModule.forFeature([Video])],
  exports: [VideoService]
})
export class VideoModule {}
