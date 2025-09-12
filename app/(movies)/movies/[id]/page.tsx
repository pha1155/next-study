import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieProviders from "../../../../components/movie-providers";
import MovieVideos from "../../../../components/movie-videos";
import MovieSimilar from "../../../../components/movie-similar";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie providers</h1>}>
        <MovieProviders id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie similar</h1>}>
        <MovieSimilar id={id} />
      </Suspense>
    </div>
  );
}
