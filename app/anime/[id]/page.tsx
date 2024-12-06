import { client } from "@/lib/apollo";
import { GET_ANIME_BY_ID } from "@/services/getAnimes";
import type { Media } from "@/types/Media";
import Image from "next/image";

export default async function SinglePage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const { data } = await client.query({
    query: GET_ANIME_BY_ID,
    variables: {
      mediaId: id,
    },
  });

  const media = data.Media as Media;

  return (
    <main className="pb-12">
      <div className="relative h-96">
        <Image
          src={media.bannerImage ?? ""}
          alt={media.title.userPreferred ?? ""}
          fill
          className="object-cover"
        />
      </div>
      <div className="container-full">
        <div className="flex gap-8 flex-col sm:flex-row">
          <div className="relative w-full h-auto sm:w-[215px] sm:h-[18.75rem] aspect-[215/300] mt-8 mx-auto sm:mt-[-6.25rem]">
            <Image
              src={media.coverImage?.large ?? ""}
              alt={media.title.userPreferred ?? ""}
              fill
              className="object-cover"
            />
          </div>

          <div className="sm:mt-4 w-full">
            <h1 className="text-2xl mb-4">{media.title.userPreferred}</h1>

            <div dangerouslySetInnerHTML={{ __html: media.description ?? "" }}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
