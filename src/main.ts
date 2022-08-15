import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //convierte los dto a validos
      transformOptions: { enableImplicitConversion: true }  //convierte los dto a validos
    })
  );

  await app.listen(process.env.PORT);
  console.log(`App running on port ${ process.env.PORT }`);
  
}
bootstrap();
