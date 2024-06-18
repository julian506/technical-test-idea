import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExtractedData } from './extracted-data/extracted-data.entity';
import { ExtractedDataModule } from './extracted-data/extracted-data.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      entities: [ExtractedData],
    }),
    ExtractedDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
