'use client';

import { Suspense, useState } from 'react';

import MovieCard from '@/ui/components/MovieCard';
import Paginator from '@/ui/components/Paginator';
import { Movie } from '@/utils/types/Movie';

import styles from './Movies.module.css';

type Props = {
  movies: Movie[];
  total: number;
};

export default function Movies({ movies, total }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const getClickHandler = (id: string) => () => {
    if (active === id) {
      return setActive(null);
    }

    setActive(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.imdbID}
            active={movie.imdbID === active}
            onClick={getClickHandler(movie.imdbID)}
          />
        ))}
      </div>

      {total > 10 && (
        <Suspense>
          <Paginator total={total} />
        </Suspense>
      )}
    </div>
  );
}
