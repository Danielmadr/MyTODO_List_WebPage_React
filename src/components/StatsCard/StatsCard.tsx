import styles from "./styles.module.scss";

interface IStatsCard {
  title: string;
  value: number;
}

export const StatsCard: React.FC<IStatsCard> = ({ title, value }) => {
  return (
    <article className={styles.stats_card}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
};
