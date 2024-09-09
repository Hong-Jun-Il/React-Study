import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // 요청을 허용할 도메인
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true, // 클라이언트에서 쿠키와 인증 헤더를 전송할 수 있도록 허용
  });
  app.setGlobalPrefix('sign');
  await app.listen(3000);
}
bootstrap();
