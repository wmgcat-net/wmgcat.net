import {
	SignJWT,
	jwtVerify
} from "jose";

const secret = new TextEncoder()
	.encode(process.env.JWT_SECRET!);

/**
 * Sign new JWT token
 *
 * @param userId - User ID 
 * @returns
*/
export const signToken = async (userId: number) =>
	new SignJWT({ userId })
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("30m")
		.sign(secret);

/**
 * Verify token 
 * 
 * @param token - JWT token 
 * @returns 
*/
export const verifyToken = async (token: string): Promise<number | null> => {
	try {
		const { payload: { userId } } = await jwtVerify(token, secret);
		if (!userId)
			return null;

		return userId as number;
	}
	catch {
		return null;
	}
}
