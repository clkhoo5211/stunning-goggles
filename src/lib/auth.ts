// Password from environment variable (set in GitHub Secrets)
const SECRET_PASSWORD = import.meta.env.VITE_APP_PASSWORD || '123456'; // Fallback for local dev
const TOKEN_KEY = 'auth_token';
const TOKEN_EXPIRY_HOURS = 24;

interface TokenPayload {
  password: string;
  exp: number;
}

/**
 * Generates a JWT-like token if password matches
 * @param password - The password to validate
 * @returns Base64 encoded token or null if password is invalid
 */
export function generateToken(password: string): string | null {
  if (password !== SECRET_PASSWORD) {
    return null;
  }

  const payload: TokenPayload = {
    password: SECRET_PASSWORD,
    exp: Date.now() + TOKEN_EXPIRY_HOURS * 60 * 60 * 1000, // 24 hours from now
  };

  // Simple base64 encoding (not secure, but sufficient for basic access control)
  const token = btoa(JSON.stringify(payload));
  localStorage.setItem(TOKEN_KEY, token);

  return token;
}

/**
 * Validates the stored token
 * @returns true if token exists and is not expired
 */
export function validateToken(): boolean {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return false;
    }

    const payload: TokenPayload = JSON.parse(atob(token));

    // Check if token is expired
    if (Date.now() > payload.exp) {
      clearToken();
      return false;
    }

    // Check if password matches
    if (payload.password !== SECRET_PASSWORD) {
      clearToken();
      return false;
    }

    return true;
  } catch (error) {
    // Invalid token format
    clearToken();
    return false;
  }
}

/**
 * Clears the authentication token
 */
export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

/**
 * Gets the remaining time until token expiry
 * @returns milliseconds until expiry, or 0 if no valid token
 */
export function getTokenExpiryTime(): number {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      return 0;
    }

    const payload: TokenPayload = JSON.parse(atob(token));
    const remaining = payload.exp - Date.now();

    return remaining > 0 ? remaining : 0;
  } catch (error) {
    return 0;
  }
}
