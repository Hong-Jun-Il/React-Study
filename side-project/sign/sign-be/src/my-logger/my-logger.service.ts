import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  async logToFile(entry: string) {
    const formattedEntry = `${Intl.DateTimeFormat('ko-KR', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'Asia/Seoul',
    }).format(new Date())}\t${entry}\n`;

    try {
      if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))) {
        await fs.promises.mkdir(path.join(__dirname, '..', '..', 'logs'));
      }

      await fs.promises.appendFile(
        path.join(__dirname, '..', '..', 'logs', 'myLogFile.log'),
        formattedEntry,
      );
    } catch (error) {
      if (error instanceof Error) console.error(error);
    }
  }

  log(message: any, context?: string) {
    const entry = `${context}\t${typeof message === 'object' ? message.message : message}`;
    this.logToFile(entry);
    super.log(message, context);
  }

  error(message: any, stackOrContext?: string) {
    const entry = `${stackOrContext}\t${typeof message === 'object' ? message.message : message}`;
    this.logToFile(entry);
    super.error(message, stackOrContext);
  }
}
