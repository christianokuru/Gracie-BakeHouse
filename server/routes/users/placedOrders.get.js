import { verifyToken } from "@/server/utils/verifyToken";
import User from '@/server/models/User'

export default defineEventHandler(async (event) => {
  try {
    const decoded = verifyToken(event);

    return {
      message: "You are authorized",
      success: true,
      user: decoded, // contains the email and token details
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
});
