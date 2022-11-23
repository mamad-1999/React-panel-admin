import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/api";
import { useSnackbar } from "notistack";

const deleteApi = (url) => {
    return request({ url: url, method: "delete" })
}

const useDeleteApi = (key) => {
    const queryClient = useQueryClient()
    const { enqueueSnackbar } = useSnackbar()

    return useMutation((url) => deleteApi(url), {
        onSuccess: () => {
            queryClient.invalidateQueries(key)
            enqueueSnackbar("Delete successfully", { variant: "success" })
        }
    })
}

export default useDeleteApi