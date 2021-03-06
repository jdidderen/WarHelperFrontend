import http from "@/http-common";

class MatchService {
    list() {
        return http.get('/api/match')
    }

    lastfive() {
        return http.get('/api/match/lastfive')
    }

    my(id) {
        return http.get('/api/match/my/' + id)
    }

    get(id) {
        return http.get('/api/match/' + id)
    }

    create(data) {
        return http.post('/api/match/create', data)
    }

    createLine(data) {
        return http.post('/api/match/line/create', data)
    }

    update(id, data) {
        return http.put('/api/match/update/' + id, data)
    }

    delete(id) {
        return http.delete('/api/match/delete/' + id)
    }

}

export default new MatchService();
