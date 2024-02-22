import axios, { AxiosError } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await axiosInstance.get("/posts?populate=*", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
