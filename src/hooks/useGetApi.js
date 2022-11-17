import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getPostsData = () => {
    return axios.get("http://localhost:8000/posts")
}

export const useGetApi = () => {
    return useQuery(["posts"], getPostsData)
}