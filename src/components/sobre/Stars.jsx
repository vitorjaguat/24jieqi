import styles from './Stars.module.css';

export default function Stars() {
  return (
    <div className={styles.container}>
      <div className={styles.night}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    </div>
  );
}
