"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces/interfaces";

export const Card = ({ attributes, id }: any) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL_BASE;

  const [state, setState] = useState<CardProps>();

  useEffect(() => {
    if (attributes) {
      setState(() => ({
        attributes: {
          title: attributes.title,
          image: attributes.image.data.attributes.url,
          description: attributes.description,
          category: attributes.category,
        },
        id: id,
      }));
    }
  }, [attributes]);

  return (
    <div className="container w-[300px] sm:w-96 h-auto gap-y-4">
      <div className="w-[300px] sm:w-96 h-48 relative">
        {state?.attributes.image &&
          <Image
            src={`${API_BASE_URL}${state?.attributes.image}`}
            alt="picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        }
      </div>
      <div className="my-4 bg-gray-900 h-0.5 w-full"></div>

      <div className="flex flex-col gap-y-2">
        {state?.attributes?.title && (
          <h6 className="text-desktop-h6 text-gray-900 truncate">
            {state?.attributes.title}
          </h6>
        )}

        {state?.attributes?.description && (
          <p className="text-body-2 text-gray-700">{state?.attributes.description}</p>
        )}

        <button
          onClick={() => console.log("you clicked me")}
          className="text-inline-link-2 text-primary-700 w-fit"
        >
          Call to action
          <hr className="my-0 border-primary-700" />
        </button>
      </div>
    </div>
  );
};
