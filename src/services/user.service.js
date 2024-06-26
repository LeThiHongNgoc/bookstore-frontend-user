import createApiClient from "./api.service";

class UserService {
  constructor(baseUrl = "/api/users") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/")).data;
  }
  async create(data) {
    return (await this.api.post("/", data)).data;
  }
  async get(id) {
    return (await this.api.get(`/${id}`)).data;
  }
  async login(email, password) {
    return (await this.api.post("/login", { email, password })).data;
  }
  async update(id, data) {
    return (await this.api.post(`/${id}`, data)).data;
  }
  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
}
export default new UserService();
