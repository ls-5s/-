import axios, {
  type AxiosInstance,
  type AxiosError,
} from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const request: AxiosInstance = axios.create({
  baseURL,
  timeout: 100000,
  headers: { "Content-Type": "application/json" },
});

request.interceptors.response.use(
  (res) => {
    const data = res.data;
    if (data && typeof data === "object" && "code" in data) {
      if ([0, 200, 201].includes(data.code)) {
        return data.data ?? data;
      }
      return Promise.reject(new Error(data.message || "请求失败"));
    }
    return data;
  },
  (err: AxiosError) => {
    const backendMessage =
      (err.response?.data as { message?: string })?.message || err.message;
    let errorMsg = "网络异常，请稍后重试";
    if (err.response?.status === 401) {
      errorMsg = "登录已过期，请重新登录";
    } else if (err.response?.status === 403) {
      errorMsg = backendMessage || "暂无权限访问该资源";
    } else if (err.response && err.response.status >= 400 && err.response.status < 500) {
      errorMsg = backendMessage || "请求错误";
    } else if (err.response && err.response.status >= 500) {
      errorMsg = backendMessage || "服务器内部错误，请稍后重试";
    } else if (err.code === "ECONNABORTED") {
      errorMsg = "请求超时，请检查网络";
    } else if (!err.response) {
      errorMsg = "网络异常，请检查网络连接";
    }
    console.error("请求错误：", errorMsg);
    return Promise.reject(new Error(errorMsg));
  },
);

export default request;
