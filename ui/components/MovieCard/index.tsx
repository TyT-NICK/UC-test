import Image from 'next/image';
import classnames from 'classnames';

import { Movie } from '@/utils/types/Movie';

import styles from './MovieCard.module.css';

const placeholderSrc = 'https://imageplaceholder.net/300x450?text=Cool+Movie';

type Props = {
  movie: Movie;
  active?: boolean;
  onClick: VoidFunction;
};

export default function MovieCard({ movie, active, onClick }: Props) {
  const { imdbID, plot, rating, title, type, year, poster } = movie;

  return (
    <div className={classnames(styles.card, { [styles.active]: active })} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <Image src={poster || placeholderSrc} alt="default poster" fill />
      </div>

      <p>Title: {title}</p>
      <p>Year: {year}</p>
      <p>imdbID: {imdbID}</p>
      <p>Type: {type}</p>

      <div className={styles.additionalInfo}>
        <p>{plot}</p>
        <p>{rating === 'N/A' ? '??' : rating} / 10</p>
      </div>
    </div>
  );
}
