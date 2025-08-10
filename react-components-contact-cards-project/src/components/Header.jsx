import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h1>📞ContactKeeper</h1>
      </Link>
      <ul>
        <li>
          <NavLink to="/contactForm">Contact Form</NavLink>
        </li>
        <li>
          <NavLink to="/contactList">Contact List</NavLink>
        </li>
      </ul>
    </nav>
  );
}
