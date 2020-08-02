import http from "../http-common";

class ScenarioService {
    list() {
        return http.get("/api/scenario");
    }

    get(id) {
        return http.get(`/api/scenario/${id}`);
    }

    create(data) {
        return http.post("/api/scenario/create", data);
    }

    update(id, data) {
        return http.put(`/api/scenario/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/api/scenario/delete/${id}`);
    }

}

export default new ScenarioService();
