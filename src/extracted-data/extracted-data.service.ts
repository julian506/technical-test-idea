import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { And, Repository } from 'typeorm';
import { ExtractedData } from './extracted-data.entity';
import { MoreThanOrEqual, LessThanOrEqual } from 'typeorm';

@Injectable()
export class ExtractedDataService {
  constructor(
    @InjectRepository(ExtractedData)
    private extractedDataRepository: Repository<ExtractedData>,
  ) {}

  getOneExtractedDataRecord(station_sk: string, date: Date, hour: string) {
    return this.extractedDataRepository.findOne({
      where: {
        station_sk,
        medition_date: date,
        medition_time: hour,
      },
      select: ['medition_date', 'medition_time', 'pm2_5', 'pm10'],
    });
  }

  getExtractedDataByDateRange(
    station_sk: string,
    initial_date: Date,
    final_date: Date,
  ) {
    return this.extractedDataRepository.find({
      where: {
        station_sk,
        medition_date: And(
          MoreThanOrEqual(initial_date),
          LessThanOrEqual(final_date),
        ),
      },
      select: ['medition_date', 'medition_time', 'pm2_5', 'pm10'],
    });
  }
}
