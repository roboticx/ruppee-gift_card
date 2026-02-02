import axios from "axios";
import type { AxiosResponse, AxiosError } from "axios";
import { showToast } from "../Components/ToastProvider";
import { logout } from "../store/slices/authSlice";

let injectedStore: any = null;

export const attachStore = (store: any) => {
  injectedStore = store;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

api.interceptors.request.use(
  (config: any) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    return Promise.reject(error);
  },
);

interface ApiRequestOptions {
  toast?: boolean;
  showSuccess?: boolean;
  showError?: boolean;
}

const handleRequest = async <T>(
  requestFn: () => Promise<AxiosResponse<T>>,
  { toast, showSuccess = true, showError = true }: ApiRequestOptions,
): Promise<T> => {
  try {
    const response: any = await requestFn();

    if (showSuccess && toast) {
      showToast({
        type: "success",
        message:
          response.data?.message ??
          response.data?.data?.message ??
          "Operation successful!",
        duration: 3000,
        position: "top-right",
      });
    }
    return response.data;
  } catch (err: any) {
    if (
      axios.isAxiosError(err) &&
      (err.response?.status === 401 || err.response?.status === 403)
    ) {
      injectedStore?.dispatch(logout());
    }

    // if (axios.isAxiosError(err) && err.response?.status === 403) {
    //   Router.push('/login');
    // }

    if (showError && toast) {
      showToast({
        type: "error",
        message:
          err?.response?.data?.message ?? err.message ?? "An error occurred",
        duration: 3000,
        position: "top-right",
      });
    }

    throw err;
  }
};

interface FetchApiParams {
  url: string;
  params?: Record<string, any>;
  toast?: boolean;
  showSuccess?: boolean;
  showError?: boolean;
}

export const FETCH = ({
  url,
  params = {},
  toast,
  showSuccess,
  showError,
}: FetchApiParams): Promise<any> =>
  handleRequest(() => api.get(url, { params }), {
    toast,
    showSuccess,
    showError,
  });

interface PostApiParams {
  url: string;
  data?: Record<string, any>;
  toast?: boolean;
  showSuccess?: boolean;
  showError?: boolean;
}

export const POST = ({
  url,
  data = {},
  toast,
  showSuccess,
  showError,
}: PostApiParams): Promise<any> =>
  handleRequest(() => api.post(url, data), {
    toast,
    showSuccess,
    showError,
  });

export const PUT = ({
  url,
  data = {},
  toast,
  showSuccess,
  showError,
}: PostApiParams): Promise<any> =>
  handleRequest(() => api.put(url, data), {
    toast,
    showSuccess,
    showError,
  });

export const PATCH = ({
  url,
  data = {},
  toast,
  showSuccess,
  showError,
}: PostApiParams): Promise<any> =>
  handleRequest(() => api.patch(url, data), {
    toast,
    showSuccess,
    showError,
  });

export const DELETE = ({
  url,
  data = {},
  toast,
  showSuccess,
  showError,
}: PostApiParams): Promise<any> =>
  handleRequest(() => api.delete(url, { data }), {
    toast,
    showSuccess,
    showError,
  });
