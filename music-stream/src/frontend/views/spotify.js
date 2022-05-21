import axios from 'axios';
const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "be4f66a30e1d4762b7b21785ca4555f8";
const redirectUri = "http://localhost:3000";
const scopes =["user-library-read","playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL:"https://api.spotify.com/v1/"
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config){
        config.headers.Authorization = "Bearer " + token;
        return config;
    })
};

export default apiClient;