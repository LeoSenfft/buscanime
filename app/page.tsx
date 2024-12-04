"use client";

import Card from "@/components/Card";
import { Filter } from "@/components/Search/Filter";
import { SearchForm } from "@/components/Search/SearchForm";
import useGetAllSearchParams from "@/hooks/useGetAllSearchParams";
import type { Media } from "@/types/Media";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const GET_ANIMES = gql`
  query Media($perPage: Int, $search: String, $sort: [MediaSort], $page: Int) {
    Page(perPage: $perPage, page: $page) {
      media(search: $search, sort: $sort) {
        averageScore
        bannerImage
        coverImage {
          large
          color
        }
        id
        genres
        title {
          userPreferred
        }
      }
    }
  }
`;
export default function Home() {
  const [page, setPage] = useState(1);
  const { allParams } = useGetAllSearchParams();

  const { data, loading, error, fetchMore } = useQuery(GET_ANIMES, {
    variables: { perPage: 20, sort: "ID", search: allParams.s === "" ? null : allParams.s },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (page === 1) {
      return;
    }

    fetchMore({
      variables: { page },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          Page: {
            media: [...previousResult.Page.media, ...fetchMoreResult.Page.media],
          },
        };
      },
    });
  }, [page]);

  return (
    <div className="Home flex flex-col gap-6">
      <Filter />

      <SearchForm />

      {error && <div className="text-danger text-center">Ocorreu um error ao buscar os dados!</div>}

      {data && (
        <div className="grid grid-cols-cards gap-x-4 gap-y-[1.3125rem]">
          {data?.Page?.media?.map((media: Media) => (
            <Card
              key={media.id}
              title={media.title.userPreferred}
              categories={media.genres}
              averageScore={media.averageScore}
              imageSrc={media.coverImage?.large ?? ""}
            />
          ))}
        </div>
      )}

      {!error && !loading && data.Page.media.length === 0 && (
        <div className="text-center">Nenhum resultado encontrado</div>
      )}

      {loading && <div className="text-center">Carregando...</div>}

      <button
        className="bg-warning w-full py-3 px-2 rounded-lg text-white font-semibold text-xl"
        type="button"
        onClick={() => setPage((prev) => prev + 1)}
      >
        + Ver mais
      </button>
    </div>
  );
}
