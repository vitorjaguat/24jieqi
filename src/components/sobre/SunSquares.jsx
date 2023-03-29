import styles from './SunSquares.module.css';

export default function SunSquares() {
  return (
    <div className={styles.container}>
      <div className={styles.sun}>
        <div className={styles.rings}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
