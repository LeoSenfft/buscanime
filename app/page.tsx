"use client";

import Card from "@/components/Card";
import { TopBar } from "@/components/Search/TopBar";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState, type FormEvent } from "react";

const GET_ANIMES = gql`
  query Media($perPage: Int, $sort: [MediaSort], $page: Int) {
    Page(perPage: $perPage, page: $page) {
      media(sort: $sort) {
        title {
          userPreferred
        }
      }
    }
  }
`;
export default function Home() {
  const [page, setPage] = useState(1);

  const { data, loading, error, fetchMore } = useQuery(GET_ANIMES, {
    variables: { perPage: 20, sort: "ID" },
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

  function handleOnSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="Home">
      <TopBar />

      {error && <div className="text-danger">Ocorreu um error ao buscar os dados!</div>}

      {data && (
        <div className="grid grid-cols-cards gap-x-4 gap-y-[1.3125rem]">
          {data?.Page?.media?.map((item: any, index: number) => (
            <div key={index}>{item.title.userPreferred}</div>
          ))}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      )}

      {loading && <div>carregando...</div>}

      <button type="button" onClick={() => setPage((prev) => prev + 1)}>
        Ver mais
      </button>
    </div>
  );
}
