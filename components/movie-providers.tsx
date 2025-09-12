import { API_URL } from "../constants";
import styles from "../styles/movie-providers.module.css";

export async function getProviders(id: string) {
  const response = await fetch(`${API_URL}/${id}/providers`);
  return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getProviders(id);
  const krProviders = providers.KR?.flatrate ?? [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Providers</h2>
      {krProviders.map((provider: any) => (
        <div key={provider.provider_id} className={styles.provider}>
          <img
            src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
            alt={provider.provider_name}
          />
          <h6>{provider.provider_name}</h6>
        </div>
      ))}
    </div>
  );
}
