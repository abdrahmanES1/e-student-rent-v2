import axios from "axios"
import Cookies from "js-cookie"

import { env } from "@/env.mjs"

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
})
axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${Cookies.get("token")}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { axiosInstance }
