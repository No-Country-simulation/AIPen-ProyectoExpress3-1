import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import {GeminiService} from "./application/service/geminis.service";


@Module({
    imports: [HttpModule, ConfigModule],
    controllers: [],
    providers: [GeminiService,],
    exports: [GeminiService]
})
export class AIModule {}