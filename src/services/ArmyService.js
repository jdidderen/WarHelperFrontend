import http from "@/http-common";

class ArmyService {
    list() {
        return http.get("/api/army");
    }

    get(id) {
        return http.get(`/api/army/${id}`);
    }

    create(data) {
        return http.post("/api/army/create", data);
    }

    update(id, data) {
        return http.put(`/api/army/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/api/army/delete/${id}`);
    }

}

export default new ArmyService();
