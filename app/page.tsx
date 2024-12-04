"use client";

import Card from "@/components/Card";
import { Filter } from "@/components/Search/Filter";
import { SearchForm } from "@/components/Search/SearchForm";
import useGetAllSearchParams from "@/hooks/useGetAllSearchParams";
import { GET_ANIMES } from "@/services/getAnimes";
import type { Media } from "@/types/Media";
import { FormatMediaMap } from "@/utils/getFormatMediaValues";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

function PageContent() {
  const [page, setPage] = useState(1);
  const { allParams } = useGetAllSearchParams();

  const { data, loading, error, fetchMore } = useQuery(GET_ANIMES, {
    variables: {
      perPage: 20,
      sort: "ID",
      search: allParams.s === "" ? undefined : allParams.s,
      format: allParams.format === "" ? undefined : FormatMediaMap.get(allParams.format),
    },
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
    <div className="Home container-full flex flex-col gap-6 py-6">
      <Filter />

      <SearchForm />

      {data && (
        <div className="grid grid-cols-cards gap-x-4 gap-y-[1.3125rem]">
          {data.Page?.media?.map((media: Media) => (
            <Link href={`/anime/${media.id}`} key={media.id}>
              <Card
                title={media.title.userPreferred}
                categories={media.genres}
                averageScore={media.averageScore}
                imageSrc={media.coverImage?.large ?? ""}
              />
            </Link>
          ))}
        </div>
      )}

      {error && <div className="text-danger text-center">Ocorreu um error ao buscar os dados!</div>}

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

export default function Home() {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}
