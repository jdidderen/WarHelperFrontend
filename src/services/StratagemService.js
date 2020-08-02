import http from "../http-common";

class StratagemService {
    list() {
        return http.get("/api/stratagem");
    }

    phaseList() {
        return http.get("/api/stratagem/phase");
    }

    get(id) {
        return http.get(`/api/stratagem/${id}`);
    }

    create(data) {
        return http.post("/api/stratagem/create", data);
    }

    update(id, data) {
        return http.put(`/api/stratagem/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/api/stratagem/delete/${id}`);
    }

}

export default new StratagemService();
