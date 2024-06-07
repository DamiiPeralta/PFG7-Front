import { jwtDecode } from "jwt-decode";

export const getUserIdFromToken = (): string | null => {
  const token = localStorage.getItem("userSession");
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    return decoded.sub || null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
