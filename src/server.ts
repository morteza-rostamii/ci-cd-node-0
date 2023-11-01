import express from 'express'
import { Express, Request, Response, NextFunction } from 'express';
import { readFile } from 'fs';
import dotenv from 'dotenv'
import cors from 'cors'

const port = process.env.PORT || 3000;

const app: Express = express();

app.get('/', (req, res, next) => {
  // ./ starts from the root_dir
  readFile('./src/index.html', 'utf-8', (err, html) => {
    if (err) {
      return res.send(err);
    }

    return res.send(html);
  });
});

app.get("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    msg: 'works!!'
  });
});

app.listen(port, () => {
  console.log(`node server running on port ${port}`);
});
