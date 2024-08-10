import envConfig from './app/config';
import app from './app';

app.listen(envConfig.port, () =>
  console.log(`server running at port: http://localhost:${envConfig.port}`)
);
