import { useApi } from "../composables/useApi";

const API = {
  async getArticles() {
    const api: any = useApi();

    const res = await api.get("/api/articles");

    return await res.json();
  },

  async getCompanies() {
    const api: any = useApi();

    const res = await api.get("/api/companies");

    return await res.json();
  },

  async getArticleById(id: string) {
    const api: any = useApi();
    console.log("ssssss");

    const res = await api.get(`/api/articles/${id}`);

    return await res.json();
  },
};

export default API;
