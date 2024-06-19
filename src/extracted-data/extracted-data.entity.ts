import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'ExtractedData' })
export class ExtractedData {
  @PrimaryColumn()
  id: number;

  @Column('date')
  medition_date: Date;

  @Column('time')
  medition_time: string;

  @Column('text')
  station_sk: string;

  @Column('float')
  pm2_5: number;

  @Column('float')
  pm10: number;

  @Column('float')
  temperature: number;

  @Column('float')
  humidity: number;

  @Column('float')
  barometric_pressure: number;

  @Column('timestamp')
  createdAt: Date;

  @Column('timestamp')
  updatedAt: Date;
}
