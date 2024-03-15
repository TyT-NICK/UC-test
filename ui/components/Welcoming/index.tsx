import styles from './Welcoming.module.css';

export default function Welcoming() {
  return (
    <>
      <h1 className={styles.title}>Welcome to the test task result</h1>
      <p className={styles.description}>
        Try to type somethging in the search-bar above then hit ENTER button or click magnifying glass icon
      </p>
      <p className={styles.secret}>there`s a tiny secret that you can reveal clicking my name in the header ↑</p>
    </>
  );
}
