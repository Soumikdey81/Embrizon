import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import Header from "../components/Header.jsx";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <Header />
      <section>
        <h1>
          Stay Connected.
          <br />
          Manage all your contacts in one place.
        </h1>

        <h2>
          A simple and efficient contact manager to store names, emails, and
          phone numbers. Keep your network organized and accessible anytime.
        </h2>

        <Link to="/contactForm" className="cta">
          Get Started Now
        </Link>
      </section>
    </main>
  );
}
