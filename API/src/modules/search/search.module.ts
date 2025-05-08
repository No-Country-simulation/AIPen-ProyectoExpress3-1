import { Module } from '@nestjs/common';
import {GoogleScraperService} from "./application/service/google-scraper.service";


@Module({
    providers: [GoogleScraperService],
    exports: [GoogleScraperService]
})
export class SearchModule {}