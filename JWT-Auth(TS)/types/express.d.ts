export {};

import type { IUser } from "../src/model/user.model.js";

declare global {
  namespace Express {
    interface Request {
      user?: Omit<IUser, "password"> & { _id: string };
    }
  }
}