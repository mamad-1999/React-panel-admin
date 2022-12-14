import { useQuery } from "@tanstack/react-query"
import { request } from "../utils/api"

const fetchData = (url) => {
    return request({ url: url })
}

export const useGetApi = (key, urlAddress, filtered = "") => {
    return useQuery(key, () => fetchData(urlAddress), {

        // filter post in clint filtering
        select: (data) => {
            if (key[0] === "posts") {
                return data.data.filter(post => post.title.toLowerCase().includes(filtered.toLowerCase()))
            }
            return data.data
        }
    })
}