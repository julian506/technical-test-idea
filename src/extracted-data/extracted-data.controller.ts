import { Controller, Get, Param } from '@nestjs/common';
import { ExtractedDataService } from './extracted-data.service';

@Controller('extracted-data')
export class ExtractedDataController {

  constructor(private extractedDataService: ExtractedDataService){}

  @Get('/one-record/:station_sk/:date/:hour')
  getOneExtractedDataRecord(
    @Param('station_sk') station_sk: string,
    @Param('date') date: Date,
    @Param('hour') hour: string,
  ) {
    return this.extractedDataService.getOneExtractedDataRecord(station_sk, date, hour);
  }

  @Get('/records-by-date-range/:station_sk/:initial_date/:final_date')
  getExtractedDataByDateRange(
    @Param('station_sk') station_sk: string,
    @Param('initial_date') initial_date: Date,
    @Param('final_date') final_date: Date,
  ) {
    return this.extractedDataService.getExtractedDataByDateRange(station_sk, initial_date, final_date);
  }
}
