import http from "../http-common";

class PersonalObjectiveService {
    list() {
        return http.get("/api/personal-objective");
    }

    get(id) {
        return http.get(`/api/personal-objective/${id}`);
    }

    create(data) {
        return http.post("/api/personal-objective/create", data);
    }

    update(id, data) {
        return http.put(`/api/personal-objective/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/api/personal-objective/delete/${id}`);
    }

}

export default new PersonalObjectiveService();
