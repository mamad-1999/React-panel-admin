import axios from "axios";

const apiClint = axios.create({
    baseURL: "http://localhost:8000"
})

export const request = ({ ...options }) => {

    const onSuccess = response => response

    const onError = error => {
        console.log(error.message);
        return error
    }

    return apiClint(options).then(onSuccess).catch(onError)
}