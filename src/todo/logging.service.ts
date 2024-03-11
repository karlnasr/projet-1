import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingService {
    log(message: string): void {
        console.log(`[INFO] ${message}`);
    }

    warn(message: string): void {
        console.warn(`[WARNING] ${message}`);
    }

    error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }
}
