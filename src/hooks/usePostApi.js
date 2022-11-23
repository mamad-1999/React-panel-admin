import { useQueryClient, useMutation } from "@tanstack/react-query";
import { request } from "../utils/api";
import useNotification from "./useNotification";

const fetchData = (data, url, method) => {
    return request({ url: url, method: method, data: data })
}

const usePostApi = (key, url, method) => {
    const queryClient = useQueryClient()
    const { showNotification } = useNotification()

    return useMutation((data) => fetchData(data, url, method), {
        onMutate: async newData => {
            await queryClient.cancelQueries({ queryKey: key })
            const previousData = queryClient.getQueryData(key)

            queryClient.setQueryData(key, oldData => {
                return {
                    ...oldData,
                    data: [
                        ...oldData.data,
                        { id: Date.now(), ...newData }
                    ]
                }
            })

            return { previousData }
        },
        onError: (err, newData, context) => {
            queryClient.setQueryData(key, context.previousData)
            showNotification("Added post failed", "error")
        },
        onSettled: () => {
            queryClient.invalidateQueries(key)
            showNotification("Added post successfully", "success")
        }
    })
}

export default usePostApi