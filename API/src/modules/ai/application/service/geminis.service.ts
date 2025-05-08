import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';
import { GeminiGenerateContentParams } from '../../domain/interface/ai.interface';

@Injectable()
export class GeminiService {
    private readonly ai: GoogleGenAI;

    constructor(private readonly configService: ConfigService) {
        const apiKey = this.configService.get<string>('GEMINI_API_KEY');
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY no definido en env');
        }
        this.ai = new GoogleGenAI({ apiKey });
    }

    async generateContent(
        prompt: string,
        model = 'gemini-2.0-flash',
        temperature = 0.7,
        candidateCount = 1,
    ): Promise<string> {
        const params: GeminiGenerateContentParams = {
            model,
            contents: prompt,
            temperature,
            candidateCount,
        };

        try {
            const response = await this.ai.models.generateContent(params);
            if (!response?.text) {
                throw new Error('Respuesta de Gemini sin campo text');
            }
            return response.text;
        } catch (err: any) {
            throw new HttpException(
                `Gemini API Error: ${err.message}`,
                HttpStatus.BAD_GATEWAY,
            );
        }
    }
}
