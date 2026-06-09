export const useApi = () => {

  const config = useRuntimeConfig()

  const baseURL = config.public.apiBase

  return {
    get: (url: string) =>
      fetch(`${baseURL}${url}`, {
        method: "GET"
      }),

    post: (url: string, body: any) =>
      fetch(`${baseURL}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }),

    patch: (url: string, body: any) =>
      fetch(`${baseURL}${url}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }),

    del: (url: string) =>
      fetch(`${baseURL}${url}`, {
        method: "DELETE"
      })
  }

}