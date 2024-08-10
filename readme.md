## problem solving:

### setup .env config file:

```javascript
config/index.ts
------------------------
  import dotenv from 'dotenv';
  import path from 'path';

  dotenv.config({ path: path.join(process.cwd(), '.env') });

  export default {
    port: process.env.PORT
  };

server.ts
---------
  import envConfig from './app/config';
  const dotEnvPort = envConfig.port;

.env
----
  PORT = "8000"
```

<!-- ### api end points:
```javascript
app
  .use('/api', router);
``` -->
