import { IsDateString, IsNumber, IsString } from 'class-validator';

export class AddExtractedDataDto {
  @IsDateString()
  medition_date: Date;

  @IsString()
  medition_time: string;

  @IsString()
  station_sk: string;

  @IsNumber()
  pm2_5: number;

  @IsNumber()
  pm10: number;

  @IsNumber()
  temperature: number;

  @IsNumber()
  humidity: number;

  @IsNumber()
  barometric_pressure: number;
}
