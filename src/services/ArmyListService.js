import http from "../http-common";

class PersonalObjectiveService {
    list() {
        return http.get("/api/army-list");
    }

    get(id) {
        return http.get(`/api/army-list/${id}`);
    }

    create(data) {
        return http.post("/api/army-list/create", data);
    }

    update(id, data) {
        return http.put(`/api/army-list/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/api/army-list/delete/${id}`);
    }

}

export default new PersonalObjectiveService();
