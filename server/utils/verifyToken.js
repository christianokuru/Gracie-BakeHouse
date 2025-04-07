import jwt from "jsonwebtoken";

export const verifyToken = (event) => {
  // get the jwt key for signing
  const config = useRuntimeConfig();
  const secret = config.JWT_SECRET;

  // capture the header from the event
  const headers = getHeaders(event);
  // get the authorization header
  const authHeader = headers.authorization || headers.Authorization;


  // Checks if user has or provided a token
  if (!authHeader) {
    throw createError({
      statusCode: 401,
      statusMessage: "No token provided in Authorization header",
    });
  }

  const token = authHeader.split(" ")[1]; // expects: "Bearer <token>"

  try {
    const decoded = jwt.verify(token, secret);
    return decoded; // e.g., { email: 'gracie@example.com', iat: ..., exp: ... }
  } catch (err) {
    throw createError({
      statusCode: 403,
      statusMessage: "Invalid or expired token, you can't access this resource",
    });
  }
};
