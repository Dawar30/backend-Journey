declare namespace NodeJS {
  interface ProcessEnv {
    ACCESS_TOKEN_SECRET?: string;
    REFRESH_TOKEN_SECRET?: string;
    MONGO_URI?: string;
    MONGODB_URI?: string;
    NODE_ENV?: string;
    PORT?: string;
  }
}