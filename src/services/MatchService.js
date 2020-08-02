import http from "@/http-common";

class MatchService {
    list() {
        return http.get('/api/match')
    }

    lastfive() {
        return http.get('/api/match/lastfive')
    }

    get(id) {
        return http.get('/api/match/' + id)
    }

    create(data) {
        return http.get('/api/match/create', {data:data})
    }

    update(id, data) {
        return http.get('/api/match/update/' + id, {data: data})
    }

    delete(id) {
        return http.get('/api/match/delete/' + id)
    }

}

export default new MatchService();
