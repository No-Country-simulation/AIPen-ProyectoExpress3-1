import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import {GoogleResult} from "../../domain/interface/search.interface";


@Injectable()
export class GoogleScraperService {
    async scrapeGoogleSearch(query: string): Promise<GoogleResult[]> {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const $ = cheerio.load(data);
        const results: GoogleResult[] = [];

        $('div.g').each((i, el) => {
            const title = $(el).find('h3').text();
            const snippet = $(el).find('div.VwiC3b').first().text();

            if (title && snippet) {
                results.push({
                    title: title.trim(),
                    snippet: snippet.trim()
                });
            }
        });

        return results.slice(0, 5);
    }
}