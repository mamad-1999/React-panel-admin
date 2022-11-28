import { useQueryClient, useMutation } from "@tanstack/react-query";
import useNotification from "./useNotification";
// api import
import { request } from "../utils/api";

// api function ==> axios
const updateData = (data, url, method) => {
    return request({ url: `${url}/${data.id}`, method: method, data: data })
}

const useUpdateApi = (key, url, method) => {
    const queryClient = useQueryClient()
    // notification custom hook
    const { showNotification } = useNotification()

    return useMutation((data) => updateData(data, url, method), {
        onMutate: async newData => {
            await queryClient.cancelQueries({ queryKey: [key, newData.id] })
            const previousData = queryClient.getQueryData([key, newData.id])

            // update optimistic
            queryClient.setQueryData([key, newData.id], newData)

            return { previousData, newData }
        },
        onError: (err, newData, context) => {
            queryClient.setQueryData([key, context.newData.id], context.previousData)
            showNotification("Edit user failed", "error")
        },
        onSettled: (newData) => {
            // get update data and show in ui
            queryClient.invalidateQueries([key, newData.id])
            showNotification("Edit user successfully", "success")
        }
    })
}

export default useUpdateApi