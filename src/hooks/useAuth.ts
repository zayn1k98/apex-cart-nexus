export type UserRole = "guest" | "admin";

const ROLE_STORAGE_KEY = "app.user.role";

export const getStoredRole = (): UserRole => {
  if (typeof window === "undefined") return "guest";
  const value = window.localStorage.getItem(ROLE_STORAGE_KEY);
  return (value as UserRole) || "guest";
};

export const setStoredRole = (role: UserRole) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ROLE_STORAGE_KEY, role);
};

export const isAdmin = (): boolean => getStoredRole() === "admin";

export const loginAsAdmin = () => setStoredRole("admin");

export const logout = () => setStoredRole("guest");


