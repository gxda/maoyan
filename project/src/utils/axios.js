import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // console.log("aha");
    // console.log(response.data.movieList)
    return response.data.movieList;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
export default axios;