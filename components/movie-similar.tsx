import Link from "next/link";
import { API_URL } from "../constants";
import styles from "../styles/movie-similar.module.css";

interface ISimilarMovie {
  title: string;
  id: string;
  poster_path: string;
}

async function getSimilar(id: string): Promise<ISimilarMovie[]> {
  const response = await fetch(`${API_URL}/${id}/similar`);
  const data = await response.json();
  return Array.isArray(data) ? data : data.results || [];
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similarMovies = await getSimilar(id);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Similar Movies</h2>
      {similarMovies.map((movie) => (
        <div className={styles.movie} key={movie.id}>
          <Link prefetch href={`/movies/${movie.id}`}>
            <img src={movie.poster_path} alt={movie.title} />
            <h6>{movie.title}</h6>
          </Link>
        </div>
      ))}
    </div>
  );
}
