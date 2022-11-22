import { useQueryClient, useMutation } from "@tanstack/react-query";
import { request } from "../utils/api";
import { useSnackbar } from "notistack";

const fetchData = (data) => {
    console.log(data)
    return request({ url: "/posts", method: "post", data: data })
}

const usePostApi = (key) => {
    const queryClient = useQueryClient()
    const { enqueueSnackbar } = useSnackbar()

    return useMutation(fetchData, {
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