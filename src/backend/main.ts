import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import * as http from "http";
import { NextApiHandler } from "next";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "./modules/app/app.module";

import * as typeorm from "typeorm";

export module Backend {
  let app: INestApplication;

  export async function getApp() {
    if (!app) {
      const connection = typeorm.getConnectionManager();

      await Promise.all(connection.connections.map((c) => c.close()));

      app = await NestFactory.create(AppModule, { bodyParser: false });
      app.setGlobalPrefix("api");

      await app.init();
    }

    return app;
  }

  export async function getListener() {
    const app = await getApp();
    const server: http.Server = app.getHttpServer();
    const [listener] = server.listeners("request") as NextApiHandler[];
    return listener;
  }
}
