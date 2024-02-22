"use client";

import { useEffect, useState } from "react";
import HeroCard from "@/components/HeroCard";
import SliderSection from "@/components/SliderSection";
import { fetchCategories, fetchPosts } from "../lib/api";
import { PropsDataCards, PropsDataCategories } from "@/interfaces/interfaces";
import { AxiosError } from "axios";

const HomePage = () => {
  const [categories, setCategories] = useState<PropsDataCategories>({
    data: null,
    isLoading: true,
    error: null,
  });
  const [posts, setPosts] = useState<PropsDataCards>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const postsData = await fetchPosts();

        if (postsData) {
          console.log(postsData.data);
          setPosts((prevState: PropsDataCards) => ({
            ...prevState,
            data: postsData,
            isLoading: false,
            error: null,
          }));
        }
      } catch (error: unknown) {
        const err = error as AxiosError;
        setPosts((prevState: PropsDataCards) => ({
          ...prevState,
          isLoading: false,
          error: err.toString(),
        }));
      }
    };

    const fetchCategoriesData = async () => {
      try {
        const categoriesData = await fetchCategories();
        if (categoriesData) {
          setCategories((prevState: PropsDataCategories) => ({
            ...prevState,
            data: categoriesData,
            isLoading: false,
            error: null,
          }));
        }
      } catch (error: unknown) {
        const err = error as AxiosError;
        setCategories((prevState: PropsDataCategories) => ({
          ...prevState,
          isLoading: false,
          error: err.toString(),
        }));
      }
    };

    fetchPostsData();
    fetchCategoriesData();
  }, []);

  return (
    <div>
      <HeroCard />
      {posts?.data && <SliderSection cards={posts.data} />}

      {posts?.isLoading && (
        <div>
          <h4>Loading data...</h4>
        </div>
      )}

      {posts?.error && (
        <div>
          <h4>{posts.error.toString()}</h4>
        </div>
      )}
    </div>
  );
};

export default HomePage;
