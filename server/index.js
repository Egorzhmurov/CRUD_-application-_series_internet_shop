import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/user_route.js';

// Загрузка переменных окружения из файла .env (из корневой папки)
dotenv.config({ path: '../.env' });

// Инициализация приложения
const app = express();

// Middleware для обработки JSON-запросов
app.use(bodyParser.json());

// Настройка порта (берется из .env или используется 8000 по умолчанию)
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

// Подключение роутов пользователей (все эндпоинты будут начинаться с /api)
app.use("/api", route);

// Подключение к MongoDB и запуск сервера
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });