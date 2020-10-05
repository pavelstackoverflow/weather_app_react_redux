import * as axios from 'axios'

const weatherServer = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    timeout: 2000
});

const appServer = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 2000
});

export const cityApi = {
    getCityWeather(city, token) {
        return weatherServer.get(`weather?q=${city}&units=metric&appid=${token}`)
            .then(response => ({
                data: response.data,
                success: true
            }))
            .catch(error => {
                return ({
                    data: "Error get city weather",
                    success: false
                })
            });
    },

    searchCity(name) {
        return appServer.get(`cities/?name_like=${name}`)
            .then(response => ({
                data: response.data,
                success: true
            }))
            .catch(error => {
                return ({
                    data: "Error get city list",
                    success: false
                })
            });
    },

    getToken() {
        return appServer.get(`token`)
            .then(response => ({
                data: response.data,
                success: true
            }))
            .catch(error => {
                return ({
                    data: "Error get token",
                    success: false
                })
            });
    }



};