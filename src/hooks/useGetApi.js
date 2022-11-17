import { useQuery } from "@tanstack/react-query"
import { request } from "../utils/api"

const fetchData = (url) => {
    return request({ url: url })
}

export const useGetApi = (key, urlAddress) => {
    return useQuery(key, () => fetchData(urlAddress))
}