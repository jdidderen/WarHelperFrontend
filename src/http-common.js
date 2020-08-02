import axios from 'axios';

const CSRF_COOKIE_NAME = 'csrftoken';
const CSRF_HEADER_NAME = 'X-CSRFToken';

const http = axios.create({
    xsrfCookieName: CSRF_COOKIE_NAME,
    xsrfHeaderName: CSRF_HEADER_NAME,
    baseURL: 'http://warhammer-backend.jdi.me/',
});

http.interceptors.request.use(config => {
    if (localStorage.getItem("token") != null)
        config.headers["Authorization"] = "Token " + localStorage.getItem("token");
        config.headers["content-type"] = "application/json";
    return config;
});

export default http;
