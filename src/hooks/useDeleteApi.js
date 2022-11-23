import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/api";

const deleteApi = (url) => {
    return request({ url: url })
}

const useDeleteApi = (key, url) => {
    const queryClient = useQueryClient()

    return useMutation(() => deleteApi(url), {
        onSuccess: () => {
            queryClient.invalidateQueries(key)
        }
    })
}

export default useDeleteApi