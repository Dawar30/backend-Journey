import type { Response } from "express";
import jwt from "jsonwebtoken";

const isProduction = process.env.NODE_ENV === "production";

const getAccessTokenSecret = (): string => {
  const secret = process.env.ACCESS_TOKEN_SECRET;

  if (!secret) {
    throw new Error("ACCESS_TOKEN_SECRET is not configured");
  }

  return secret;
};

const getRefreshTokenSecret = (): string => {
  const secret = process.env.REFRESH_TOKEN_SECRET;

  if (!secret) {
    throw new Error("REFRESH_TOKEN_SECRET is not configured");
  }

  return secret;
};

export const generateTokenAndSetCookies = async (
  res: Response,
  userId: string,
  email: string,
  name: string
) => {
  const payload = { userId };

  const accessToken = jwt.sign(payload, getAccessTokenSecret(), {
    expiresIn: "15m"
  });

  const refreshToken = jwt.sign(payload, getRefreshTokenSecret(), {
    expiresIn: "7d"
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 15 * 60 * 1000
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  return { accessToken, refreshToken };
};