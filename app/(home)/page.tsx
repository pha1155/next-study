import Movie from "../../components/movie";
import { API_URL } from "../../constants";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000)); // 임의로 로딩 시간 추가
  return fetch(API_URL).then((response) => response.json());
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
