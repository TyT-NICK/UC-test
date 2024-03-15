import styles from './SearchInfo.module.css';

type Props = {
  search: string;
  total: number;
};

export default function SearchInfo({ search, total }: Props) {
  return (
    <p className={styles.searchInfo}>
      You searched for: <span className={styles.value}>{search}</span>
      <span className={styles.total}>
        {total} result{total === 1 ? '' : 's'}
      </span>
    </p>
  );
}
