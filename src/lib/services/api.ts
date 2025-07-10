import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Request interceptor for auth tokens
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const savePost = async (postData: {
  id?: string;
  content: string;
  title?: string;
  slug?: string;
  metaDescription?: string;
  status?: string;
}) => {
  try {
    const url = postData.id ? `/posts/${postData.id}` : "/posts";
    const method = postData.id ? "put" : "post";

    const response = await api[method](url, postData);
    return response.data;
  } catch (error) {
    console.error("Error saving post:", error);
    throw error;
  }
};

export const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
