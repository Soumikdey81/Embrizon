import { useState, useEffect } from "react";
import ToggleButton from "react-toggle-button";
import styles from "./Card.module.css";

export default function Card({ app }) {
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem(`liked-${app.name}`);
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem(`liked-${app.name}`, JSON.stringify(liked));
  }, [liked, app.name]);

  return (
    <div className={styles.card}>
      <img src={app.logo} alt={`${app.name} logo`} className={styles.logo} />
      <h3 className={styles.name}>{app.name}</h3>

      <ToggleButton
        value={liked}
        onToggle={() => setLiked(!liked)}
        inactiveLabel={<span>🤍</span>}
        activeLabel={<span>❤️</span>}
        colors={{
          activeThumb: {
            base: "crimson",
          },
          inactiveThumb: {
            base: "#ddd",
          },
          active: {
            base: "#ffe6e6",
          },
          inactive: {
            base: "#f0f0f0",
          },
        }}
      />

      <p className={styles.status}>{liked ? "Liked" : "Unliked"}</p>
    </div>
  );
}
