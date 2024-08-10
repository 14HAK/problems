/* eslint-disable @typescript-eslint/no-unused-vars */
import envConfig from './app/config';
import app from './app';
import mongoose from 'mongoose';
import { Server } from 'http';

let server: Server;

async function main() {
  try {
    await mongoose.connect(envConfig.URI as string);
    // mongoose.set('strictPopulate', false);
    console.log(`database connection success...`);

    server = app.listen(envConfig.PORT, () => {
      console.log(`server running at port: http://localhost:${envConfig.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
