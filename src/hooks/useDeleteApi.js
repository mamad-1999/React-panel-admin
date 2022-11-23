import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/api";
import useNotification from "./useNotification";

const deleteApi = (url) => {
    return request({ url: url, method: "delete" })
}

const useDeleteApi = (key) => {
    const queryClient = useQueryClient()
    const { showNotification } = useNotification()

    return useMutation((url) => deleteApi(url), {
        onSuccess: () => {
            queryClient.invalidateQueries(key)
            showNotification("Delete successfully", "success")
        }
    })
}

export default useDeleteApi