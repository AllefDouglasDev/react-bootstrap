import api from "./index";

class AuthService {
  isAuthenticated() {
    return true;
  }

  async signIn() {
    return await api.get("auth/login");
  }
}

export default new AuthService();
