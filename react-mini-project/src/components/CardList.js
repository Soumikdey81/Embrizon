import Card from "./Card";
import styles from "./CardList.module.css";

export default function CardList({ apps }) {
  return (
    <div className={styles.cardList}>
      {apps.map((app) => (
        <Card app={app} key={app.name} />
      ))}
    </div>
  );
}
