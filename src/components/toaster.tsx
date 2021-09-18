import { toast, ToastOptions } from "react-toastify";

const config: ToastOptions = {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
};

const Toaster = (msg: string, type: string) => {
    switch (type) {
        case "success":
            toast.success(msg, config);
            break;
        case "error":
            toast.error(msg, config);
            break;
        default:
            break;
    }
};

export default Toaster;
