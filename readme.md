# problem solving:

## setup .env config file:

```javascript
// config/index.ts
------------------
  import dotenv from 'dotenv';
  import path from 'path';

  dotenv.config({ path: path.join(process.cwd(), '.env') });

  export default {
    port: process.env.PORT
  };

// server.ts
------------
  import envConfig from './app/config';
  const dotEnvPort = envConfig.port;

// .env
-------
  PORT = "8000"
```

## setup mongoose Schema & model:

```javascript
// Interface
------------
import { Document, Model } from 'mongoose';

// Document Interface
---------------------
interface TUSER extends Document {
  name: string;
  email: string;
  fullName(): string; // instance methods
  completeName: string; // This is a virtual property
}

// Model Interface: // statics method
-------------------------------------
export interface TUSERMODEL extends Model<TUSER> {
  findByEmail(email: string): Promise<TUSER | null>;
}

// Schema
---------
const userSchema: Schema<TUSER> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'firstName is required.']
  },
  email: {
    type: String,
    required: [true, 'email is required.'],
    unique: true
  }
});

// pre/save hook middleware
---------------------------
userSchema.pre('save', function (next) {
  this.dateOfBirth = new Date(moment(this.dateOfBirth).format('YYYY/DD/MM'));
  next();
});

// instance methods
-------------------
userSchema.methods.fullName = function (): string {
  return `${this.name}`;
};

// statics methods
------------------
userSchema.statics.findByEmail = function (email: string): Promise<TUSER | null> {
  return this.findOne({ email }).exec();
};

// virtual methods
------------------
userSchema.virtual('completeName').get(function () {
  return this.name.firstName + this.name.lastName;
});

// model
--------
const User: TUSERMODEL = mongoose.model<TUSER, TUSERMODEL>('User', userSchema);

// using process way
--------------------
const foundUser = await User.findByEmail('johndoe@example.com');
if (foundUser) {
  console.log(foundUser.fullName()); // Should output: John Doe
}
```

## Typescript enum in mongoose :

```javascript
// enum interface
-----------------
enum STATUS {
  COMPLETED = 'completed',
  PENDING = 'pending',
  CANCELED = 'canceled'
}

// use enum in main interface
-----------------------------
interface TORDER extends Document {
  status: STATUS;
}

// use in mongoose Schema
-------------------------
const orderSchema: Schema<TORDER> = new mongoose.Schema({
  status: {
      type: String,
      enum: Object.values(STATUS),
      // Set enum values here
      default: STATUS.COMPLETED
    }
})

// using as a const value
-------------------------
const statusLoyal = STATUS.COMPLETED;
console.log(statusLoyal)
```

## Express Typescript Request Type Add Our Custom Types :
```javascript
// src/types/express/index.d.ts
-------------------------------

  // Import the express module to extend its types
  import type * as express from 'express';

  // Extend the Express namespace
  declare global {
    namespace Express {
      // Add custom properties to the Request interface
      interface Request {
        user?: JwtPayload; 
        // Replace `JwtPayload` with your custom type
        // Add other custom properties as needed
      }
    }
  }

  // If you have a custom payload interface, define it
  interface JwtPayload {
    userId: string;
    email: string;
    iat: number;
    // Add other properties as needed
  }

// tsconfig.json
----------------
  {
    "compilerOptions": {
      "target": "ES2020",
      "module": "CommonJS",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true,
      "baseUrl": "./",
      "outDir": "./dist",
      "rootDir": "./src",
      "typeRoots": [
        "./node_modules/@types",
        "./src/types" // Ensure this is included
      ]
    },
    "include": ["src/**/*.ts", "src/types/**/*.d.ts"], // Include your types
    "exclude": ["node_modules", "dist"]
  }

// AuthMiddleware.ts
--------------------
  const AuthMiddleWare = async(req:Request, res:Response, next:NextFunction):Promise<void> =>{
    req.user = decoded as JwtPayload;
    next();
  }
```

## Function .TS Type Interface:
```javascript
  interface UserCardProps {
    greed: (userId: number) => void;
    meet(userId: number): number;
    handleLogin(userId: number) => Promise<number>;
  }
```

<!-- ## api end points:
```javascript
app
  .use('/api', router)..;
``` -->
