import { useQuery } from "@tanstack/react-query"
import { request } from "../utils/api"

const getPostsData = () => {
    return request({ url: "/posts" })
}

export const useGetApi = () => {
    return useQuery(["posts"], getPostsData)
}