import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtractedDataService } from './extracted-data.service';
import { ExtractedDataController } from './extracted-data.controller';
import {ExtractedData} from './extracted-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExtractedData])],
  providers: [ExtractedDataService],
  controllers: [ExtractedDataController]
})
export class ExtractedDataModule {}
