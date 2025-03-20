import { POST } from "./Adapter/base";

export const login = (data) => {
  return POST(`login`, data);

  return fetcher("login", { method: "P" });
};
export const guestLogin = (data) => {
  return POST(`guest_login`, data);
};
export const forgotPassword = (data) => {
  return POST(`forgot_password`, data);
};
export const updatePassword = (data) => {
  return POST(`reset_password`, data);
};

export const signup = (user) => {
  return POST(`register`, user);
};
export const contactUs = (data) => {
  return POST(`contact`, data);
};
