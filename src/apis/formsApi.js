import axios from "axios";

const formsApi = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL_API,
});

formsApi.interceptors.request.use(config => {
    config.headers = { ...config.headers, "Authorization": sessionStorage.getItem("token"), };
    return config;
})

export default formsApi;