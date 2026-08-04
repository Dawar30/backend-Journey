import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import User from "../model/user.model.js";

type AuthTokenPayload = JwtPayload & {
	userId: string;
};

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const tokenFromCookie = req.cookies?.accessToken;
		const tokenFromHeader = req.headers.authorization?.startsWith("Bearer ")
			? req.headers.authorization.slice(7)
			: undefined;

		const token = tokenFromCookie ?? tokenFromHeader;

		if (!token) {
			return res.status(401).json({ success: false, message: "Authentication required" });
		}

		const secret = process.env.ACCESS_TOKEN_SECRET;
		if (!secret) {
			return res.status(500).json({ success: false, message: "Access token secret is not configured" });
		}

		const decoded = jwt.verify(token, secret) as AuthTokenPayload;
		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(401).json({ success: false, message: "User not found" });
		}

		req.user = {
			...user.toObject(),
			_id: user._id.toString()
		};

		return next();
	} catch (error) {
		console.error("Authentication error:", error);
		return res.status(401).json({ success: false, message: "Invalid or expired token" });
	}
};
