import http from "../http-common";

class ObjectiveService {
    list() {
        return http.get("/api/objective");
    }

    get(id) {
        return http.get(`/api/objective/${id}`);
    }

    create(data) {
        return http.post("/api/objective/create", data);
    }

    update(id, data) {
        return http.put(`/api/objective/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/api/objective/delete/${id}`);
    }

}

export default new ObjectiveService();
