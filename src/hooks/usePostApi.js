import { useQueryClient, useMutation } from "@tanstack/react-query";
import { request } from "../utils/api";
import { useSnackbar } from "notistack";

const fetchData = (data, url, method) => {
    return request({ url: url, method: method, data: data })
}

const usePostApi = (key, url, method) => {
    const queryClient = useQueryClient()
    const { enqueueSnackbar } = useSnackbar()

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
            enqueueSnackbar("Added post failed", { variant: "error" })
        },
        onSettled: () => {
            queryClient.invalidateQueries(key)
            enqueueSnackbar("Added post successfully", { variant: "success" })
        }
    })
}

export default usePostApi