import { useQueryClient, useMutation } from "@tanstack/react-query";
import { request } from "../utils/api";

const postData = (data) => {
    return request({ url: "/posts", method: "post", data: data })
}

const usePostApi = (key) => {
    const queryClient = useQueryClient()

    return useMutation(postData, {
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
        },
        onSettled: () => {
            queryClient.invalidateQueries(key)
        }
    })
}

export default usePostApi