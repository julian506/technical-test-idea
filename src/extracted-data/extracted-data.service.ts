import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { And, Repository } from 'typeorm';
import { ExtractedData } from './extracted-data.entity';
import { MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { AddExtractedDataDto } from './extracted-data.dto';

@Injectable()
export class ExtractedDataService {
  constructor(
    @InjectRepository(ExtractedData)
    private extractedDataRepository: Repository<ExtractedData>,
  ) {}

  async getOneExtractedDataRecord(
    station_sk: string,
    date: Date,
    hour: string,
  ) {
    try {
      return await this.extractedDataRepository.findOne({
        where: {
          station_sk,
          medition_date: date,
          medition_time: hour,
        },
        select: ['medition_date', 'medition_time', 'pm2_5', 'pm10'],
      });
    } catch(error) {
      return {
        error
      };
    }
  }

  async getExtractedDataByDateRange(
    station_sk: string,
    initial_date: Date,
    final_date: Date,
  ) {
    try {
      return await this.extractedDataRepository.find({
        where: {
          station_sk,
          medition_date: And(
            MoreThanOrEqual(initial_date),
            LessThanOrEqual(final_date),
          ),
        },
        select: ['medition_date', 'medition_time', 'pm2_5', 'pm10'],
      });
    } catch(error) {
      return {
        error
      };
    }
  }

  async addExtractedDataRecord(extractedData: AddExtractedDataDto) {
    try {
      const latestRecord = await this.extractedDataRepository.findOne({
        where: {
          station_sk: extractedData.station_sk,
        },
        order: {
          createdAt: 'DESC',
        },
      });
      const id = latestRecord ? latestRecord.id + 1 : 1;
      const dataToAdd = {
        id,
        ...extractedData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return await this.extractedDataRepository.save(dataToAdd);
    } catch (error) {
      return {
        error: error.code,
        detail: error.detail,
      };
    }
  }
}
