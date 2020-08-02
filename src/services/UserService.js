import http from "../http-common";

class UserService {
    list() {
        return http.get("/api/user");
    }

    get(id) {
        return http.get(`/api/user/${id}`);
    }

}

export default new UserService();
