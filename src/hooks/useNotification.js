import { useSnackbar } from "notistack";

const useNotification = () => {
    const { enqueueSnackbar } = useSnackbar()

    const showNotification = (message, mode) => {
        enqueueSnackbar(message, { variant: mode })
    }

    return { showNotification }
}

export default useNotification