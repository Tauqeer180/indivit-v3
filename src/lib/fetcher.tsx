import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
// import { toast } from "sonner";
// import { useRouter } from 'next/navigation'
export const baseURL = `${process.env.NEXT_PUBLIC_URL}`
// export const domain = `${process.env.NEXT_PUBLIC_DOMAIN}`;
// interface urlType {
//   url: string
//   method?: 'GET' | 'POST'
//   data?: any
// }
export const fetcher = async (
  url: string,
  options?: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    data?: any
    token?: string | null
    formData?: any
    cache?: boolean
    revalidate?: number
    tags?: any[]
  }
) => {
  // const { replace } = useRouter()
  const {
    method = 'GET',
    data,
    token,
    formData,
    cache = false,
    revalidate = 3600,
    tags = [],
  } = options || {}
  const reqOptions: RequestInit | any = {
    method,
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    } as any,
    cache: cache ? 'force-cache' : 'no-store',
  }

  if (formData) {
    reqOptions.body = formData
    // No need to set Content-Type for FormData, the browser will set it automatically
  } else if (data) {
    reqOptions.headers['Content-Type'] = 'application/json'
    reqOptions.body = JSON.stringify(data)
  }
  if (cache) {
    reqOptions.next = { revalidate, tags }
  }
  try {
    const response = await fetch(`${baseURL}api/client/${url}`, reqOptions)
    // console.log('From Fetcher ===>>>', url, '=>', response?.status)
    // console.log("fetcher ",res)

    if (response?.status === 401 && !url.includes('login') && !url.includes('register')) {
      // logout()
      // Cookies.remove("token");
      // Cookies.remove("user");
      //      if (typeof window !== "undefined") {
      //   toast.error("Please Login to proceed");
      //   window.location.href = "/signin";
      // }
    }

    const res = await response?.json()

    return res
  } catch (error) {
    return { error }
  }
}
